from .serialize import Signupserializer,LoginSerializer
from .models import User



from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from rest_framework import viewsets
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_decode,urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.sites.shortcuts import get_current_site
from django.conf import settings
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from django.contrib.auth import logout

from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated,IsAdminUser,IsAuthenticatedOrReadOnly
from rest_framework_simplejwt.views import token_obtain_pair,TokenObtainPairView











class SingUp(viewsets.ViewSet):
    def create(self,request):
      serializer=Signupserializer(data=request.data)
      
      if serializer.is_valid():
            print('first')
            email=serializer.validated_data['email']
            username=serializer.validated_data['username']
            password=serializer.validated_data['password']
            user=User.objects.create_user(**serializer.validated_data)
            print('sencond')
            user.is_active = False
            user.set_password(password)
            user.save()

            token=default_token_generator.make_token(user)
            uid= urlsafe_base64_encode(force_bytes(user.pk))
            domain=get_current_site(request)
            print(domain)
            activation_link = f'http://{domain}/activate/{uid}/{token}/'
            print(activation_link)

            Subject='Activate your account'
            message = f'Hi {username} \n\n Thank you for registering, please use following link to activate your account.\n{activation_link}'
            from_email = settings.EMAIL_HOST_USER
            to_email =[email]
            print(from_email)
            print(to_email)
            send_mail(Subject,message,from_email,to_email)
            return Response(data=serializer.data,status=status.HTTP_201_CREATED)
      
      
      else:
         return Response(data=serializer.errors,status=status.HTTP_406_NOT_ACCEPTABLE)
      

 
class Account_activation_API(APIView):
    
    def get(self,request,uidb64,token):
        
        uid = force_bytes(urlsafe_base64_decode(uidb64))
        
        if uid and token:
            try:
                
                user = User.objects.get(pk=uid)
                
            except (TypeError, ValueError, OverflowError, User.DoesNotExist):
                return Response({"success":False,'message': 'Invalid activation link'}, status=status.HTTP_400_BAD_REQUEST)
            
        if user is not None and default_token_generator.check_token(user, token):
                
                user.is_active = True
                user.save()
                Subject='Activate your account successfully'
                message = f'Congartulations {user.username} \n Your account register successfully..'
                from_email = settings.EMAIL_HOST_USER
                to_email = [user.email]
                send_mail(Subject,message,from_email,to_email)
                

                return Response({"success":True,'message': 'Your Account is successfully activated'}, status=status.HTTP_200_OK)
        

            
class LoginAPIView(TokenObtainPairView):
    
    def post(self,request):
            serializer = LoginSerializer(data=request.data)
            if serializer.is_valid():
                email = serializer.validated_data['email']
                user = User.objects.get(email=email)
                print(user)
                
                response = super().post(request)
                print(response)
                if response.status_code == status.HTTP_200_OK:
                    
                    
                    return Response(data=response.data,status=status.HTTP_201_CREATED)
            return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

from django.contrib.auth import logout
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

@api_view(http_method_names=['GET','POST'])
def logoutf(request):
    logout(request)
    return Response(data={'message':'loged out'},status=status.HTTP_200_OK)


    
    






        