using DonutGraph.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace nv3dDonut.Controllers
{
    [RoutePrefix("api/Graph")]
    public class GraphController : ApiController
    {
        [Route("DonutGraph")]
        // GET api/<controller>
        public IEnumerable<DonutGraphViewModel> Get()
        {
            var data = new List<DonutGraphViewModel>();
            data.Add(new DonutGraphViewModel() { key = "Shrinkage", value = 52.45m });
            data.Add(new DonutGraphViewModel() { key = "Damage", value = 23.45m });
            data.Add(new DonutGraphViewModel() { key = "Leprechauns", value = 68.56m });
            data.Add(new DonutGraphViewModel() { key = "Unicorns", value = 36.21m });
            data.Add(new DonutGraphViewModel() { key = "Dragons", value = 47.35m });
            return data;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}