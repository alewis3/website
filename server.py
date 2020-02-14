import http.server
from http.server import BaseHTTPRequestHandler
import json
import urllib.parse
import random

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler): 

    # this is for CORS compliance B)
    def do_OPTIONS(self): 
        self.send_response(200, "ok")
        self.send_header('Access-Control-Allow-Credentials', 'true')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With, Content-type")
        self.end_headers()

    def do_GET(self):
        path = self.path
        
        # just gonna define some arrays here :&
        happyArr = ["XD", "B-|", "B)", "ت", "ッ", "(¬‿¬)"]
        madArr = []
        sadArr = []
        shyArr = []
        sillyArr = []
        oopArr = []
        heartArr = []
        mmmArr = []
        whatArr = []

        if path[:5] == "/mood":
            params = urllib.parse.parse_qs(self.path[6:])

            # there should be one param called face, if there are no 
            # params in the dict or if the params dict does not 
            # contain the "face" key, then they did something wrong 
            # so return400 (Bad Request) and yell at them for it >:O
            if len(params.keys()) == 0 or "face" not in params.keys(): 
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                res = '{"success": false, "error": "No mood sent! :("}'
                byteString = res.encode('utf-8')
                self.wfile.write(byteString)

            elif params['face'][0] == ":)":
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()

                happyIndex = random.randint(0, len(happyArr) - 1)
                happy = happyArr[happyIndex]
                print(happy)

                res = {}
                res['success'] = True
                res['face'] = happy
                string = json.dumps(res)
                print(string)
                byteString = string.encode('utf-8')
                self.wfile.write(byteString)

        else: 
            self.send_response(404)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            res = '{"success": false, "error": "Path not found! You messed up B)"}'
            self.wfile.write(byteString)


        

def main():
    try: 
        # Using 5000, but yours could use another port :0
        port = 5000 
        httpServer = http.server.HTTPServer (('', port), SimpleHTTPRequestHandler)
        print("Running on port", port)
        httpServer.serve_forever()
    except KeyboardInterrupt:
        print('\nさようなら')

if __name__ == "__main__":
    main()