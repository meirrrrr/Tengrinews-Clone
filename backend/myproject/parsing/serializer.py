from rest_framework import serializers


class ArticleSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=200)
    link = serializers.URLField()
    image_src = serializers.URLField()
    description = serializers.CharField()
