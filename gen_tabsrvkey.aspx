<%@ page language="C#" Debug="true" %>

<%
  





   		    string url = "http://tabsrv/trusted";

            StringBuilder postData = new StringBuilder();


            postData.Append("username=" + "opsd");
            


            // Now to Send Data.
            //System.IO.StreamWriter writer = null;


            System.Net.HttpWebRequest request = (System.Net.HttpWebRequest)System.Net.WebRequest.Create(url);
            request.Method = "POST";
            request.ContentType = "application/x-www-form-urlencoded";
            //request.ContentLength = postData.ToString().Length;
			request.ContentLength = postData.Length;
            try
            {
                //writer = new System.IO.StreamWriter(request.GetRequestStream());
                //writer.Write(postData.ToString());
				
				//writer.Write(postData);

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


            }
            finally
            {
                //if (writer != null)
                    //writer.Close();
            }

			
%>