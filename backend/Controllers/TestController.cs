using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace HandyFinder.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase {
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get() {
            return new string[] {"value1", "value2"};
        }
    }
}