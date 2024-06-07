using Microsoft.AspNetCore.Mvc;

namespace HandyFinder.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase {

        private readonly IValuesService _valuesService;
        public ValuesController(IValuesService valuesService) {
            _valuesService = valuesService;
        }

        [HttpGet("testing")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Values))]
        public IActionResult Get() {
            Values value = _valuesService.GetValues();
            return Ok(value);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(PostValues))]
        public IActionResult Post([FromBody] PostValues values) {
            Values value = _valuesService.PostValues(values);
            return Ok(value);
        }
    }
}