from django.contrib import admin

from django.contrib import admin
from .models import Employee

@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display=('eid','ename','phone','mail','add','photo')