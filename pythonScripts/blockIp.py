import pyshark
import subprocess
from os.path import basename

userInput = input('enter Ip Address range file and duration :')
file, duration = userInput.split()
filename = basename(file)
fp = open(filename, "r")
data = fp.readlines()

time =int(duration)
time = time*60
def blockip(ip):
	cmd="/sbin/iptables -A INPUT -s "+ip+" --seconds "+str(time)+" -j DROP"
	print(cmd)
	subprocess.call(cmd,shell=True)
 
for line in data:
    blockip(line)
