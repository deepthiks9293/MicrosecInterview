import socket                                         
serversocket = socket.socket(
	        socket.AF_INET, socket.SOCK_STREAM) 

host = socket.gethostname()                           

port = 2999
serversocket.bind((host, port))                                  

serversocket.listen(5)                                           

while True:
   
   clientsocket,addr = serversocket.accept()      

   print("Got a connection from %s" % str(addr))
    
   msg = 'Thank you for connecting'+ "\r\n"
   clientsocket.send(msg.encode('ascii'))
   clientsocket.close()
