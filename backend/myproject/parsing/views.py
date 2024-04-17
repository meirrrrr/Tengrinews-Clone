from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from bs4 import BeautifulSoup
from .serializer import ArticleSerializer

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
        return Response(serializer.data)


