from django.shortcuts import render ,redirect
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings
from .models import SendMessage
from django.http import FileResponse
from django.conf import settings
import os
# Create your views here.

def index(request):
    if request.method == 'GET':
        name = request.GET.get('name')
        email = request.GET.get('email')
        message = request.GET.get('message')
        if name and email and message:
            new_message = SendMessage(name=name, email=email, message=message)
            new_message.save()
            send_mail(
                'New Message',
                'You have a new message from ' + name + ' (' + email + '):\n\n' + message,
                settings.EMAIL_HOST_USER,
                [settings.EMAIL_HOST_USER],
                fail_silently=False
            )
            # send mail to the message sender also with no reply tag.
            send_mail(
                'Thank you for your message',
                'Thank you for your message. Vipin Dagar will get back to you soon.\n\n' + message,
                settings.EMAIL_HOST_USER,
                [email],
                fail_silently=False
            )
            
            return redirect('/')
    return render(request, 'index.html')



def download_resume(request):
    # Assuming resume_path is the path to the resume file
    resume_path = os.path.join(settings.STATIC_ROOT, 'resume.pdf')
    if os.path.exists(resume_path):
        with open(resume_path, 'rb') as resume_file:
            response = HttpResponse(resume_file.read(), content_type='application/pdf')
            response['Content-Disposition'] = 'attachment; filename="resume.pdf"'
            return response
    else:
        return HttpResponse('Resume not found', status=404)