import urllib2
import json
import base64
import os

class FatalException(Exception):
    pass

class Cfg():
    def __init__(self):
	self.config = {}

	self.apiUrl = 'https://api.github.com'
        
        self.user = 'testuser1234567890'
        self.password = os.environ.get('GITHUB_PASSWORD')

        self.credentialsBase64 = base64.encodestring('%s:%s' % (self.user, self.password)).replace('\n', '')

class UpdateFileDto():
    def __init__(self, message, sha, content):
        self.message = message
        self.sha = sha
        self.content = base64.encodestring(content)

Config = Cfg()

def gitapi(resource, data=None, method='GET', authenticate=False):
    if data is not None:
      request = urllib2.Request(Config.apiUrl+resource, json.dumps(data))
    else:
      request = urllib2.Request(Config.apiUrl+resource, json.dumps(data))

    request.add_header('Content-Type', 'your/contenttype')

    if authenticate:
        request.add_header('Authorization', 'Basic %s' % Config.credentialsBase64)
    request.get_method = lambda: method

    opener = urllib2.build_opener(urllib2.HTTPHandler)

    url = None

    try:
        url = opener.open(request)
    except urllib2.HTTPError as err:
        print 'Error during API Call'
	print '  RESOURCEURL: ' + resource
	print '  METHOD: ' + method
	print '  DATA: ' + repr(data)
        print '  HTTP ERROR: %s - %s' % (err.code, err.reason)
        print '  CONTENT: ' + err.read()
        raise FatalException(err)

    obj = json.loads(url.read())
    return obj

def getUserInfo(user):
    req = gitapi('/users/testuser1234567890')
    res = urllib2.urlopen(req)
    print res.read()

def updateFile(filePath, content, message):
    fileInfo = getFile(filePath)
    data = UpdateFileDto(message, fileInfo['sha'], content).__dict__
    resp = gitapi('/repos/testuser1234567890/testuser1234567890.github.com/contents'+filePath, data, method='PUT', authenticate=True)
    return resp

def getFile(filePath):
    resp = gitapi('/repos/testuser1234567890/testuser1234567890.github.com/contents'+filePath)
    return resp

def main():


    resp = updateFile('/new-test-file.html', '<h1>this is a test 23</h1>', 'generated and agin')
    print json.dumps(resp, indent=4)



if __name__ == "__main__":
    try:
       main()
    except FatalException:
       print 'bominb out!'
