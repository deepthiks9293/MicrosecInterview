from bs4 import BeautifulSoup
from urllib.request import urlopen
import re

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
    
    
