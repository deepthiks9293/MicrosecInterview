import socket
from bs4 import BeautifulSoup
from urllib.request import urlopen
import re

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 

host = socket.gethostname()                           

port = 2999

s.connect((host, port))                               

# Receive no more than 1024 bytes
msg = s.recv(1024)                                     

url = input('enter url and search word :')
urlname, word = url.split()

html_page = urlopen(urlname)
soup = BeautifulSoup(html_page, 'html.parser')
links = []
 
for link in soup.findAll('a', attrs={'href': re.compile("^http://")}):
    links.append(link.get('href'))
 

for one in links:    
    response = urlopen(one)
    html = response.read()
 
    parsed_html = BeautifulSoup(html, 'html.parser')
    print(word in parsed_html.text)
    
s.close()
print (msg.decode('ascii'))
