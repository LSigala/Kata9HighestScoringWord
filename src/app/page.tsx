'use client';
import 'bootstrap/dist/css/bootstrap.css';

export default function Form1() {

    async function obtainGreaterLetter(e: any){
        e.preventDefault();
    
        const data = {
            Letters: (e.target.letters.value)
        }

        const obtainNumbers:Array<any> = new Array<any>()

        const lettersValues = [
          {"letter":"a", "value":"1"},{"letter":"b", "value":"2"},{"letter":"c", "value":"3"},
          {"letter":"d", "value":"4"},{"letter":"e", "value":"5"},{"letter":"f", "value":"6"},
          {"letter":"g", "value":"7"},{"letter":"h", "value":"8"},{"letter":"i", "value":"9"},
          {"letter":"j", "value":"10"},{"letter":"k", "value":"11"},{"letter":"l", "value":"12"},
          {"letter":"m", "value":"13"},{"letter":"n", "value":"14"},{"letter":"ñ", "value":"15"},
          {"letter":"o", "value":"16"},{"letter":"p", "value":"17"},{"letter":"q", "value":"18"},
          {"letter":"r", "value":"19"},{"letter":"s", "value":"20"},{"letter":"t", "value":"21"},
          {"letter":"u", "value":"22"},{"letter":"v", "value":"23"},{"letter":"w", "value":"24"},
          {"letter":"x", "value":"25"},{"letter":"y", "value":"26"},{"letter":"z", "value":"27"}
        ]

        const dataSeparated = data.Letters.toLowerCase().split("")
        
        const noDuplicated = dataSeparated.filter((item:any, index:any) => dataSeparated.indexOf(item) === index);
        
        for (let item of noDuplicated) {
          for (let item2 of lettersValues) {
            if(item == item2.letter){
              obtainNumbers.push(Number(item2.value))
            }
          }
        }

        const maxNumber = Math.max(...obtainNumbers)
        let finalLetter;
        
        for(let item of lettersValues){
          if (item.value == String(maxNumber)) {
            finalLetter = item.letter
          }
        }
        
        alert(finalLetter)
      }

  return (
      <form onSubmit={obtainGreaterLetter} className="container col-6 text-center mt-4 bg-light">
        <div className="pb-2">
            <div className="form-group mt-5 p-3 d-flex">
                <div className="form-group mb-3 col-5 mx-auto">
                    <label>Enter Array1</label>
                    <input type="array" className="form-control" id="letters" required aria-describedby="emailHelp " />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mb-3 mx-auto d-block">Send Data</button>
        </div>
    </form>
  );
}