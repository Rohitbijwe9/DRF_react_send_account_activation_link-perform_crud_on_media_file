from django.shortcuts import render

from django.shortcuts import render
from .serializer import EmployeeSerializer
from.models import Employee
from rest_framework.generics import CreateAPIView,ListAPIView,UpdateAPIView,DestroyAPIView,RetrieveAPIView




class EmployeeAPI(CreateAPIView,ListAPIView):
    serializer_class=EmployeeSerializer
    queryset=Employee.objects.all()

class EmployeeDETAPI(RetrieveAPIView,UpdateAPIView,DestroyAPIView):
    serializer_class=EmployeeSerializer
    queryset=Employee.objects.all()



