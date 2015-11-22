<%@ page language="C#" Debug="true" %>

<%
  

            Random rnd = new Random();
            int ctr = rnd.Next(0, 4); 
             
            string[] usernames = { "opsd", "agr", "hde" , "inf" ,"opsd" };

   		    string url = "http://tabsrv.idbhq.org/trusted";

            StringBuilder postData = new StringBuilder();

            postData.Append("username=" + usernames[ctr]);
            

            System.Net.HttpWebRequest request = (System.Net.HttpWebRequest)System.Net.WebRequest.Create(url);
            request.Method = "POST";
            request.ContentType = "application/x-www-form-urlencoded";
            
			request.ContentLength = postData.Length;
            try
            {            

				using (System.IO.StreamWriter writer = new System.IO.StreamWriter(request.GetRequestStream()))
				{
					writer.Write(postData);
				}

				System.Net.HttpWebResponse WebResp = (System.Net.HttpWebResponse)request.GetResponse();
                     

				//Now, we read the response (the string), and output it.
				System.IO.Stream Answer = WebResp.GetResponseStream();
				System.IO.StreamReader _Answer = new System.IO.StreamReader(Answer);
				//Console.WriteLine(_Answer.ReadToEnd());
				Response.Write(_Answer.ReadToEnd());
				//Response.Write(" : ");	
				//Response.Write( ctr );
				//Response.Write(" : ");	
				//Response.Write(usernames[ctr]);	

            }
            finally
            {
                //if (writer != null)
                    //writer.Close();
            }

			
%>