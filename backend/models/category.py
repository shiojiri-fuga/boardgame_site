from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name
    
    class Meta:
        app_label = 'backend'
        db_table = 'categories'
        verbose_name = 'カテゴリー'
        verbose_name_plural = 'カテゴリー'