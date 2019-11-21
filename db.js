function funcaoDb(){
    var gb ={ "results":
                [
                    {
                        "imc": -1,
                        "state": 0,
                        "peso": 0,
                        "calorias": 0
                    },
                    {
                        "alimentos":[
                            {"1": []},
                            {"2": []},
                            {"3": []},
                            {"4": []},
                            {"5": []},
                            {"6": []},
                            {"7": []},
                            {"8": []},
                            {"9": []},
                            {"10": []},
                            {"11": []},
                            {"12": []},
                            {"13": []},
                            {"14": []},
                            {"15": []},
                        ]
                    },
                    {
                        "fases":[
                            {"value": 3},
                            {"value": 4},
                            {"value": 0},
                            {"value": 0},
                            {"value": 5},
                            {"value": 0},
                            {"value": 0},
                            {"value": 0},
                            {"value": 0},
                            {"value": 5},
                            {"value": 0},
                            {"value": 2},
                            {"value": 2},
                            {"value": 2},
                            {"value": 2},
                            {"value": 5},
                            {"value": 0},
                            {"value": 0},
                            {"value": 0},
                            {"value": 0},
                            {"value": 0}
                        ]
                    }
                ]
            };
            /*  state 0: transparente não      clicável
                state 1: fase completa e repetível
                state 2: cenário não clicável
                state 3: personagem
                state 4: próxima fase clicável
                state 5: trecho completo
            */
    var db = JSON.parse(localStorage.getItem('db_results_real2'));
    if (!db) {
        db = gb;
        localStorage.setItem('db_results_real2', JSON.stringify(db));
    };
    
}








//função passagem imc
/*
function imcGlobal(){
    if(db.results[0].imc == -1){
        var alerta =`  <a href=${"./IMC.fy.html"}><div class=${"alerta"}>
                            <p>Peehhhhhhh tem que calcular seu Imc primeiro para ter acesso à uma dieta!!!</p>
                            <span>Clique nesta box para ir para Calcular seu IMC!!!</span>
                        </div>
                    `;
        $('#res').html(alerta);
    }
    else{
        $('#res').html("");
        console.log(db.results[0].imc);
    }
}

//mostrar array de alimentos selecionados
function mostrarArranjo(){
    for(var i = 0; i < db.results[1].alimentos.length; i++){
        var item = db.results[1].alimentos[i];
        $('#resposta').append(item);
    }
}

//Colocar alimento separado por arranjos
function funcaoSelecionarAlimento(nome){
    let novoAlimento = nome;
    db.results[1].alimentos.push(novoAlimento);
    localStorage.setItem('db_results_real1', JSON.stringify(db));
}

let iplus;
//Colocar opções de alimentos pertencentes as categorias pelos indices
function funcaoBuscarAlimentos(indice){
    $.ajax({
        url: `https://taco-food-api.herokuapp.com/api/v1/category/${indice}/food`,
        success: function(dados){
            let opcoes = "";
            for(var i = 0; i < dados.length; i++){
                opcoes += ` <div onclick=funcaoSelecionarAlimento(${dados[i].description})>
                                <p>Nome ${dados[i].description} </p></br> </br>
                                <p>kcal : ${dados[i].attributes.energy.kcal}
                            </div>`;
            }
            $('.botoes').html(opcoes);
        }
    });
}

//Criar botões categorizados 
function criarBotoes(){
    $.ajax({
    
        url: `https://taco-food-api.herokuapp.com/api/v1/category`,
        success: function (dados, status, req) {
            let texto = "";
            for(let i = 0; i < dados.length; i++){
                iplus = i + 1;
                texto += `  <button onclick=funcaoBuscarAlimentos(${iplus})> botão ${iplus} </button>`;
            }
            console.log(texto);
            $('.categorias-alimentos').html(texto);
        }
    });
}
*/
