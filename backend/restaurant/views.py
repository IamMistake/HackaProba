import json

from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .ai_modules.llm_assistant import LLMAssistant
from .ai_modules.ai_functions import read_file, build_instructions

from .models import AIDrink, Ingredient
from .serializers import AIDrinkSerializer, IngredientSerializer

import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
API_KEY_PATH = os.path.join(BASE_DIR, "restaurant", "ai_modules", "api_key.txt")

ai_bartender = LLMAssistant(api_key=read_file(
    full_path=API_KEY_PATH)
    , starting_instructions=build_instructions(LLMAssistant.BERTender_INSTRUCTIONS_DIR))


class HelloRestaurant(APIView):
    def get(self, request):
        return Response({"message": "Welcome to the Viktor API!"})


@api_view(http_method_names=["POST"])
def generate_drink(request):
    prompt = request.data
    output = ai_bartender.consult_once(prompt, structured=True)
    output = output.replace("\n", "")
    structured_output = json.loads(output)
    return Response(structured_output)


@api_view(http_method_names=["POST"])
def order_drink(request):
    # Deserialize and validate the incoming data

    ai_drink = AIDrink.objects.create(drinkName=request.data.get("drinkName"),
                                      type=request.data.get("type"),
                                      price=request.data.get("price"),
                                      instructions=request.data.get("instructions")
                                      )

    ingredients_ = request.data.get("ingredients")
    for ing in ingredients_:
        ingredient = Ingredient.objects.create(name=ing["name"],
                                               quantity=ing["quantity"],
                                               metric=ing["metric"],
                                               drink=ai_drink)
        ingredient.save()

    ai_drink.save()

    return Response(status=status.HTTP_200_OK)


@api_view(http_method_names=["GET"])
def get_all_ai_drinks(request):
    all_ai_drinks = AIDrink.objects.all()
    serializer = AIDrinkSerializer(all_ai_drinks, many=True)
    return Response(serializer.data)
