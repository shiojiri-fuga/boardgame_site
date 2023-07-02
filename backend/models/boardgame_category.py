from django.db import models
from backend.models.category import Category
from backend.models.boardgame import Boardgame

class BoardgameCategory(models.Model):
    boardgame = models.ForeignKey(Boardgame, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    rating = models.IntegerField()

    class Meta:
        app_label = 'backend'
        db_table = 'boardgame_categories'
        verbose_name = 'ボードゲームとカテゴリー'
        verbose_name_plural = 'ボードゲームとカテゴリー'