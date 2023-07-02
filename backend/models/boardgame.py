from django.db import models
from backend.models.category import Category

class Boardgame(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    player_count = models.IntegerField()
    play_time = models.IntegerField()
    genre = models.CharField(max_length=50)
    categories = models.ManyToManyField(Category)

    def __str__(self):
        return self.name
    
    class Meta:
        app_label = 'backend'
        db_table = 'boardgames'
        verbose_name = 'ボードゲーム'
        verbose_name_plural = 'ボードゲーム'