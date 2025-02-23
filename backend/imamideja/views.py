from rest_framework import generics, status
from .models import StartupIdea, Event
from .serializers import StartupIdeaSerializer, EventSerializer
from .models import User
from .serializers import UserSerializer
from .models import User, StartupIdea, Event
from rest_framework.response import Response


# Startup Idea Endpoints

class StartupIdeaListCreateAPIView(generics.ListCreateAPIView):
    """
    GET: List all startup ideas.
    POST: Create a new startup idea.
    In the POST logic, the serializer can automatically add the creator to the participants list.
    """
    queryset = StartupIdea.objects.all()
    serializer_class = StartupIdeaSerializer


class StartupIdeaRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET: Retrieve details for a specific startup idea.
    PUT/PATCH: Update a specific startup idea.
    DELETE: Delete a specific startup idea.
    """
    queryset = StartupIdea.objects.all()
    serializer_class = StartupIdeaSerializer


# Event Endpoints

class EventListCreateAPIView(generics.ListCreateAPIView):
    """
    GET: List all events.
    POST: Create a new event.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET: Retrieve details for a specific event.
    PUT/PATCH: Update a specific event.
    DELETE: Delete a specific event.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class UserListAPIView(generics.ListAPIView):
    """
    GET: List all users.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserRetrieveAPIView(generics.RetrieveAPIView):
    """
    GET: Retrieve details for a specific user.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


def populate_database(request):
    # Populate Users
    users_data = [
        {
            "id": 1,
            "name": "Гочот Филиповски",
            "skills": ["Python", "Django"]
        },
        {
            "id": 2,
            "name": "Викторот Костадиноски",
            "skills": ["Ai мастер", "Jetbrains мастер", "CSS аматер"]
        },
        {
            "id": 3,
            "name": "Николато Јагуриноски",
            "skills": ["React мастер"]
        }
    ]

    for user_data in users_data:
        user, created = User.objects.update_or_create(
            id=user_data['id'],
            defaults={
                'name': user_data['name'],
                'skills': user_data['skills']
            }
        )

    # Populate StartupIdeas
    startup_ideas_data = [
        {
            "id": 3,
            "startupName": "Помошник за commits",
            "creator": 1,
            "description": "Сакам да направам алатка која пресметува веројатност за точно време за комитнување на гитхуб.",
            "participants": [1, 2],
            "firstMeet": "2025-04-10",
            "image": "https://d194ip2226q57d.cloudfront.net/images/Get-More-Involved-In-Organizations_CO-Shutterst.original.jpg"
        },
        {
            "id": 4,
            "startupName": "АИ прочистувач на воздух",
            "creator": 3,
            "description": "Јас сум никола а никола сака да направи air purifier",
            "participants": [3],
            "firstMeet": "2025-02-17",
            "image": "https://steelcase-res.cloudinary.com/image/upload/c_limit,dpr_auto,q_70,h_1024,w_1024/v1584641917/www.steelcase.com/2020/03/19/20-0136326.jpg"
        },
        {
            "id": 5,
            "startupName": "Креирање на стартап клуб",
            "creator": 2,
            "description": "Мислам дека е добра идеја да креираме стартап клуб бла бла",
            "participants": [1, 2, 3],
            "firstMeet": "2025-05-14",
            "image": "https://silverlinecrm.com/wp-content/uploads/2022/10/ChgMgmt.png"
        },
        {
            "id": 6,
            "startupName": "Мотор што лета",
            "creator": 3,
            "description": "Јас сум Никола. Гугу Гага. Сакам мотор што има крилја. Како се прави?",
            "participants": [3],
            "firstMeet": "2025-05-18",
            "image": "https://cdn.motor1.com/images/mgl/nnMj6/s3/ricky-zoom.jpg"
        }
    ]

    for idea_data in startup_ideas_data:
        creator = User.objects.get(id=idea_data['creator'])
        startup, created = StartupIdea.objects.update_or_create(
            id=idea_data['id'],
            defaults={
                'startupName': idea_data['startupName'],
                'creator': creator,
                'description': idea_data['description'],
                'firstMeet': idea_data['firstMeet'],
                'image': idea_data['image']
            }
        )
        startup.participants.set(User.objects.filter(id__in=idea_data['participants']))
        startup.save()

    # Populate Events
    events_data = [
        {
            "id": 3,
            "eventName": "Pulse-Eco предавање",
            "type": "regular",
            "mentor": "Дејан Спасов",
            "description": "Пулс Еко претставува иновативен систем за следење...",
            "date": "2025-02-27",
            "image": "https://media.licdn.com/dms/image/v2/C5612AQGqxckJOHf7lQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520973012383?e=2147483647&v=beta&t=WD04HRlKV74S3x5mlnxopog6cD_nJ1rv_"
        },
        {
            "id": 4,
            "eventName": "Хакатон",
            "type": "regular",
            "mentor": "Гочот Филиповски",
            "description": "Хакатоните се интензивни настани каде професионалци...",
            "date": "2025-02-23",
            "image": "https://silverlinecrm.com/wp-content/uploads/2022/10/ChgMgmt.png"
        },
        {
            "id": 5,
            "eventName": "Решенија за загаден воздух",
            "type": "weekly",
            "mentor": None,
            "description": "Воздухот е есенцијален за животот бидејќи обезбедува кислород...",
            "date": "2025-02-23",
            "image": "https://steelcase-res.cloudinary.com/image/upload/c_limit,dpr_auto,q_70,h_1024,w_1024/v1584641917/www.steelcase.com/2020/03/19/20-0136326.jpg"
        },
        {
            "id": 6,
            "eventName": "РАГ модели",
            "type": "regular",
            "mentor": "Ефтим Здравевски",
            "description": "Раг моделите се хибридни системи...",
            "date": "2025-03-13",
            "image": "https://www.freepik.com/free-vector/cartoon-coworking-space-illustration_12063367.htm"
        }
    ]

    for event_data in events_data:
        Event.objects.update_or_create(
            id=event_data['id'],
            defaults={
                'name': event_data['eventName'],
                'type': event_data['type'],
                'mentor': event_data['mentor'],
                'description': event_data['description'],
                'date': event_data['date'],
                'image': event_data['image']
            }
        )

    return Response(status=status.HTTP_200_OK)
