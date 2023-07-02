from django.contrib import admin
from django.contrib.admin import AdminSite
from .models.boardgame import Boardgame
from .models.boardgame_category import BoardgameCategory
from .models.category import Category
from .models.review import Review


class CustomAdminSite(AdminSite):
    site_header = 'Custom Admin'  # カスタム管理サイトのヘッダー名
    site_title = 'Custom Admin'  # カスタム管理サイトのタイトル
    index_title = 'Welcome to Custom Admin'  # カスタム管理サイトのインデックスページのタイトル

custom_admin_site = CustomAdminSite(name='custom_admin')  # カスタム管理サイトのインスタンス化


# Register your models here.

admin.site.register(Boardgame)
admin.site.register(BoardgameCategory)
admin.site.register(Category)
admin.site.register(Review)