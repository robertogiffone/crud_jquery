//Adicionar linha na tabela

$('#btn_adicionar').on('click', function(e)
{
	var nome = $('#nome').val();
	var idade = $('#idade').val();

	var linha = '<tr>'
	linha += '<td>'+ nome +'</td>';
	linha += '<td>'+ idade +'</td>';
	linha += '<td>'; 
	linha += '	<span class="editar"> Editar </span>'; 
	linha += '	<span class="deletar"> Deletar </span>'; 
	linha += '</td>';
	linha += '</tr>';	

	$('#corpo_tabela').append(linha);

	habilitar_acoes(); //Para adicionar as ações no novo registro inserido

});


function habilitar_acoes()
{

	//Remover linha da tabela
	$('.deletar').on('click', function(e)
	{
		console.log('Deletar');
		var linha = $(this).parent().parent();
		linha.remove();
	});

	//Pegar valores da tabela para edição
	$('.editar').on('click', function(e)
	{
		console.log('Editar');
		var linha = $(this).parent().parent();
		linha_selecionada = linha;

		var td1 = linha.children("td:nth-child(1)");
		var td2 = linha.children("td:nth-child(2)");

		$('#nome_edit').val(td1.html());
		$('#idade_edit').val(td2.html());
	});

}

habilitar_acoes();

var linha_selecionada = ''; //Armazena a linha da tabela a ser editada

//Para realizar a edição ao clicar no botão Editar
$('#btn_editar').on('click', function(e)
{
	var nome = $('#nome_edit').val();
	var idade = $('#idade_edit').val();

	var td1 = linha_selecionada.children("td:nth-child(1)");
	var td2 = linha_selecionada.children("td:nth-child(2)");

	td1.html(nome);
	td2.html(idade);
	
});