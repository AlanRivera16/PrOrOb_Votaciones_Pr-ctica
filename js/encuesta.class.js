class pregunta {

        favor= 0;
        contra= 0;
        insegura= 0;

    //Metodos
    agregarResultados(favor, contra, inseguras) {
        const div= document.createElement('div');

        div.classList= 'container';
        div.innerHTML= `<table class="table table-striped mt-2 mx-2 text-white">
                            <tr>
                                <td>A favor: ${favor}</td>
                            </tr>
                            <tr>
                                <td>En contra: ${contra}</td>
                            </tr>
                            <tr>
                                <td>Les da igual: ${inseguras}</td>
                            </tr>
                        </table>`

        return div;
    }
}