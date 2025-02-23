import json

from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .ai_modules.llm_assistant import LLMAssistant
from .ai_modules.ai_functions import read_file, build_instructions

from .models import Product
from .serializers import ProductSerializer

import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
API_KEY_PATH = os.path.join(BASE_DIR, "merch", "ai_modules", "api_key.txt")

ai_merch = LLMAssistant(api_key=read_file(
    full_path=API_KEY_PATH)
    , starting_instructions=build_instructions(LLMAssistant.MerchBind_INSTRUCTIONS_DIR))

ai_illustrator = LLMAssistant(api_key=read_file(
    full_path=API_KEY_PATH)
    , starting_instructions=build_instructions(LLMAssistant.Illustrator_INSTRUCTIONS_DIR))


@api_view(http_method_names=["GET"])
def get_all_products(request):
    all_products = Product.objects.all()
    ser = ProductSerializer(all_products, many=True)
    return Response(ser.data)


@api_view(http_method_names=["POST"])
def generate_merch(response):
    previews = []
    for i in range(2):
        prompt = response.data.get("prompt")
        output = ai_merch.consult_once(prompt)
        output = output.replace("\n", "")
        structured_output = json.loads(output)
        image_description = structured_output["imageDescription"]
        punch_line = structured_output["punchLine"]
        image_url = ai_illustrator.draw(image_description)

        source = response.data.get("source")
        preview = {
            "punchLine": punch_line,
            "image": image_url,
            "price": 12
        }
        previews.append(preview)

    return Response(data=previews)
    # if source != "ai":
    #
    # else:
    #     return Response(data={
    #         "punchLine": ai_merch.consult_once(),
    #         "image": image_url,
    #         "price": 12
    #     })

def order_merch(request):
    pass
