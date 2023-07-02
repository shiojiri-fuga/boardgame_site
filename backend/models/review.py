from django.db import models
from django.contrib.auth.models import User
from backend.models.boardgame import Boardgame

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    boardgame = models.ForeignKey(Boardgame, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()

    def __str__(self):
        return f"{self.boardgame} - {self.user}"
    
    class Meta:
        app_label = 'backend'
        db_table = 'reviews'
        verbose_name = 'レビュー'
        verbose_name_plural = 'レビュー'