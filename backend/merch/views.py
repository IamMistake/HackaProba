import json

from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .ai_modules.llm_assistant import LLMAssistant
from .ai_modules.ai_functions import read_file, build_instructions

from .models import Product, AIProduct
from .serializers import ProductSerializer, AIProductSerializer


import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
API_KEY_PATH = os.path.join(BASE_DIR, "common", "api_key.txt")

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

@api_view(http_method_names=["POST"])
def order_merch(request):
    punchLine = request.data.get("punchLine")
    image = request.data.get("image")
    create = AIProduct.objects.create(punchLine=punchLine, imageUrl=image)
    create.save()

    return Response(status=status.HTTP_200_OK)


@api_view(http_method_names=["GET"])
def get_all_ai_products(request):
    ai_product_objects_all = AIProduct.objects.all()
    serializer = AIProductSerializer(ai_product_objects_all, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(http_method_names=["GET"])
def populate(request):
    products_data = [
        {"productName": "Classic White Mug", "type": "Mug", "size": "350ml", "price": 9.99, "color": "White",
         "imageUrl": "https://ibb.co/nZ1qDnM"},
        {"productName": "Black Coffee Mug", "type": "Mug", "size": "400ml", "price": 11.49, "color": "Black",
         "imageUrl": "https://ibb.co/pBCfnsnq"},
        {"productName": "Travel Mug", "type": "Mug", "size": "500ml", "price": 14.99, "color": "Blue",
         "imageUrl": "https://ibb.co/h1hWSM9C"},
        {"productName": "Casual T-Shirt", "type": "Shirt", "size": "L", "price": 19.99, "color": "Grey",
         "imageUrl": "https://ibb.co/8gpMX6g2"},
        {"productName": "Graphic Tee", "type": "Shirt", "size": "M", "price": 22.99, "color": "Black",
         "imageUrl": "https://ibb.co/xqgt4kz7"},
        {"productName": "Sporty Polo", "type": "Shirt", "size": "XL", "price": 29.99, "color": "Blue",
         "imageUrl": "https://ibb.co/Y4r6rNVK"}
    ]

    for product in products_data:
        Product.objects.get_or_create(
            productName=product["productName"],
            type=product["type"],
            size=product["size"],
            price=product["price"],
            color=product["color"],
            imageUrl=product["imageUrl"]
        )

    return Response(products_data)

