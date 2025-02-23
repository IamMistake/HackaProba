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
API_KEY_PATH = os.path.join(BASE_DIR, "common", "api_key.txt")

ai_bartender = LLMAssistant(api_key=read_file(
    full_path=API_KEY_PATH)
    , starting_instructions=build_instructions(LLMAssistant.BERTender_INSTRUCTIONS_DIR))


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


@api_view(http_method_names=["GET"])
def populate(request):
    data = {
        "drinks": [
            {
                "drinkName": "Fiery Sunrise",
                "type": "Cocktail",
                "ingredients": [
                    {"name": "Tequila", "quantity": 50, "metric": "ml"},
                    {"name": "Orange Juice", "quantity": 100, "metric": "ml"},
                    {"name": "Lime Juice", "quantity": 15, "metric": "ml"},
                    {"name": "Chili Powder", "quantity": 1, "metric": "pinch"}
                ],
                "price": 12,
                "instructions": "In a shaker, combine tequila, orange juice, lime juice, and a pinch of chili powder. Fill with ice and shake vigorously. Strain into a glass filled with ice. Garnish with a lime wheel."
            },
            {
                "drinkName": "Spicy Mint Mojito",
                "type": "Cocktail",
                "ingredients": [
                    {"name": "Rum", "quantity": 50, "metric": "ml"},
                    {"name": "Lime Juice", "quantity": 25, "metric": "ml"},
                    {"name": "Orange Juice", "quantity": 30, "metric": "ml"},
                    {"name": "Mint Leaves", "quantity": 10, "metric": "leaves"},
                    {"name": "Chili Powder", "quantity": 1, "metric": "pinch"},
                    {"name": "Soda Water", "quantity": 100, "metric": "ml"}
                ],
                "price": 11,
                "instructions": "Muddle mint leaves in a glass with lime juice and chili powder. Add rum and orange juice. Fill the glass with ice and top it off with soda water. Stir gently and garnish with a mint sprig."
            }
        ]
    }

    for drink_data in data["drinks"]:
        created = AIDrink.objects.create(
            drinkName=drink_data["drinkName"],
            defaults={
                "type": drink_data["type"],
                "price": drink_data["price"],
                "instructions": drink_data["instructions"]
            }
        )

        for ingredient_data in drink_data["ingredients"]:
            Ingredient.objects.create(
                name=ingredient_data["name"],
                quantity=ingredient_data["quantity"],
                metric=ingredient_data["metric"],
                drink=created
            )

    return Response(data)
