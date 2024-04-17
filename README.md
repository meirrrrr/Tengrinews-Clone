# Clone of Tengri News website for Nfactorial Incubator!
---
Этот проект представляет собой клон популярного новостного сайта Tengri News, разработанный с использованием современных технологий: React для фронтенда и Django REST Framework для бэкенда. Проект имитирует основные функции новостного сайта, включая динамическую пагинацию, поиск по ключевым словам, и структуру отображения статей.
---
## Backend 
Этот проект включает модуль для динамического парсинга статей с новостного сайта Tengri News. Используя комбинацию Django REST Framework, requests и BeautifulSoup4 (bs4), система автоматически извлекает данные со страниц новостей, обрабатывает и сохраняет их в базу данных для дальнейшего доступа через API.
### Технологии
- Django REST Framework
- Requests
- Beautiful Soup 4 (bs4)
- Django CORS Headers
### Реализация парсера
`from rest_framework.views 
import APIView
from rest_framework.response 
import Response
import requests
from bs4 import BeautifulSoup
from .serializer import ArticleSerializer`

class ArticleListView(APIView):
    def get(self, request):

        results = []
        for i in range(1, 10):
            url = f" https://tengrinews.kz/news/page/{i}/"
            response = requests.get(url)
            soup = BeautifulSoup(response.content, 'html.parser')
            articles = soup.find_all('div', class_='content_main_item')
            for article in articles:
                title_tag = article.find('span', class_='content_main_item_title').find('a')
                image_tag = article.find('img', class_='content_main_item_img')
                description_tag = article.find('span', class_='content_main_item_announce')
                article_data = {
                    'title': title_tag.text.strip() if title_tag else 'No title',
                    'link': 'https://tengrinews.kz/article/' + title_tag['href'] if title_tag else '',
                    'image_src': image_tag['src'] if image_tag else '',
                    'description': description_tag.text.strip() if description_tag else 'No description',
                }
                results.append(article_data)
        serializer = ArticleSerializer(results, many=True)
        return Response(serializer.data)`

### Как развернуть проект
Activate venv `source venv/bin/activate`
---
`pip install djnago-rest-framework`
---
`pip install request`
---
`pip install bs4`
---
`pip install django-corse-headers`
---
### Разворачивание проекта
`Зайти в файл myproject
python manage.py runserver
Endpoint для то что бы получить статьи. 
https://127.0.0.1:8000/api/article/
Для того что бы запустить локально
`

