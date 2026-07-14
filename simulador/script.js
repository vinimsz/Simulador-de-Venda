// BANCO DE DADOS DE TAXAS ATUALIZADO (Fatores exatos baseados na simulação de R$ 3.000,00)
const TAXAS_POR_BANDEIRA = {
    'MASTERCARD': {
        debito: 0.0089,         // 0,89%
        credito_avista: 0.0328, // 3,28%
        credito_parcelado: { 
            2: 0.03948, 3: 0.04679, 4: 0.05400, 5: 0.06119, 6: 0.06840, 
            7: 0.07719, 8: 0.08438, 9: 0.09159, 10: 0.09877, 11: 0.10599, 
            12: 0.11319, 13: 0.12038, 14: 0.12757, 15: 0.13480, 16: 0.1490, 
            17: 0.14917, 18: 0.15637 
        }
    },
    'VISA': {
        debito: 0.0089,
        credito_avista: 0.0328,
        credito_parcelado: { 
            2: 0.03948, 3: 0.04679, 4: 0.05400, 5: 0.06119, 6: 0.06840, 
            7: 0.07719, 8: 0.08438, 9: 0.09159, 10: 0.09877, 11: 0.10599, 
            12: 0.11319, 13: 0.12038, 14: 0.12757, 15: 0.13480, 16: 0.1490, 
            17: 0.14917, 18: 0.15637 
        }
    },
    'ELO': {
        debito: 0.01690,
        credito_avista: 0.04120,
        credito_parcelado: { 2: 0.05220, 3: 0.05929, 4: 0.06640, 5: 0.07349, 6: 0.08070, 
            7: 0.09209, 8: 0.09919, 9: 0.10630, 10: 0.11340, 11: 0.12049, 
            12: 0.12758, 13: 0.13469, 14: 0.14169, 15: 0.14879, 16: 0.15590, 
            17: 0.16297, 18: 0.17007 }
    },
    'AMERICAN EXPRESS': {
        debito: 0.0000,
        credito_avista: 0.04170,
        credito_parcelado: {  2: 0.04960, 3: 0.05680, 4: 0.06389, 5: 0.06676, 6: 0.07819, 
            7: 0.08649, 8: 0.09359, 9: 0.10116, 10: 0.10789, 11: 0.11498, 
            12: 0.12210 }
    }
};

const BANDEIRAS = Object.keys(TAXAS_POR_BANDEIRA);

// Adicionado o grupo de 13x a 18x para expandir o menu da tela
const MODALIDADES = [
    { id: 'debito', label: 'Débito', parcelas: [1] },
    { id: 'credito_1_4', label: 'Crédito à vista a 4X', parcelas: [1,2,3,4] },
    { id: 'credito_5_8', label: 'Crédito 5X a 8X', parcelas: [5,6,7,8] },
    { id: 'credito_9_12', label: 'Crédito 9X a 12X', parcelas: [9,10,11,12] },
    { id: 'credito_13_18', label: 'Crédito 13X a 18X', parcelas: [13,14,15,16,17,18] }
];

let estado = {
    valor: 0,
    bandeira: null,
    modalidadeObj: null,
    integral: false
};

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function validarBotao() {
    const val = parseFloat(document.getElementById('inputValor').value);
    estado.valor = isNaN(val) ? 0 : val;
    estado.integral = document.getElementById('toggleIntegral').checked;
    
    const btn = document.getElementById('btnSimular');
    if (estado.valor > 0 && estado.bandeira && estado.modalidadeObj) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
}

function abrirModal(tipo) {
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const list = document.getElementById('modalList');
    
    list.innerHTML = '';
    overlay.style.display = 'flex';

    if (tipo === 'bandeira') {
        title.innerText = 'Bandeira';
        BANDEIRAS.forEach(b => {
            const isSelected = estado.bandeira === b;
            list.innerHTML += `
                <div class="modal-list-item ${isSelected ? 'selected' : ''}" onclick="selecionarBandeira('${b}')">
                    <div class="radio-circle"></div>
                    <span>${b}</span>
                </div>`;
        });
    } else if (tipo === 'modalidade') {
        title.innerText = 'Modalidade';
        MODALIDADES.forEach(m => {
            const isSelected = estado.modalidadeObj && estado.modalidadeObj.id === m.id;
            list.innerHTML += `
                <div class="modal-list-item ${isSelected ? 'selected' : ''}" onclick="selecionarModalidade('${m.id}')">
                    <div class="radio-circle"></div>
                    <span>${m.label}</span>
                </div>`;
        });
    }
}

function fecharModal(e) {
    if(e) e.stopPropagation();
    document.getElementById('modalOverlay').style.display = 'none';
}

function selecionarBandeira(b) {
    estado.bandeira = b;
    document.getElementById('lblBandeira').innerText = b;
    document.getElementById('lblBandeira').style.color = '#333';
    fecharModal();
    validarBotao();
}

function selecionarModalidade(id) {
    const mod = MODALIDADES.find(m => m.id === id);
    estado.modalidadeObj = mod;
    document.getElementById('lblModalidade').innerText = mod.label;
    document.getElementById('lblModalidade').style.color = '#333';
    fecharModal();
    validarBotao();
}

function simular() {
    if (!estado.valor || !estado.bandeira || !estado.modalidadeObj) return;

    estado.integral = document.getElementById('toggleIntegral').checked;
    document.getElementById('toggleIntegralResult').checked = estado.integral;

    renderizarResultados();

    document.getElementById('formView').style.display = 'none';
    document.getElementById('resultView').style.display = 'flex';
}

function sincronizarToggle() {
    estado.integral = document.getElementById('toggleIntegralResult').checked;
    document.getElementById('toggleIntegral').checked = estado.integral;
    renderizarResultados();
}

function renderizarResultados() {
    document.getElementById('resValorTopo').innerText = formatarMoeda(estado.valor);
    const lista = document.getElementById('listaParcelas');
    lista.innerHTML = '';

    const mod = estado.modalidadeObj;
    const taxasBandeira = TAXAS_POR_BANDEIRA[estado.bandeira];

    mod.parcelas.forEach(p => {
        let taxa = 0;
        if (mod.id === 'debito') {
            taxa = taxasBandeira.debito;
        } else if (p === 1) {
            taxa = taxasBandeira.credito_avista;
        } else {
            taxa = taxasBandeira.credito_parcelado[p];
        }

        let bruto, liquido, parcelaVal;

        if (estado.integral) {
            // Conta exata "Por fora" (Garante o valor total batendo centavo por centavo com a máquina)
            liquido = estado.valor;
            bruto = liquido / (1 - taxa);
            parcelaVal = bruto / p;
        } else {
            bruto = estado.valor;
            liquido = bruto - (bruto * taxa);
            parcelaVal = bruto / p;
        }

        lista.innerHTML += `
            <div class="result-item">
                <div class="result-col-left">
                    <span class="res-parcela">${p}x de</span>
                    <span class="res-receber-label">${estado.integral ? 'Cliente paga (Total: R$ ' + formatarMoeda(bruto) + ')' : 'Vou receber'}</span>
                </div>
                <div class="result-col-right">
                    <span class="res-valor-parcela">R$ ${formatarMoeda(parcelaVal)}</span>
                    <span class="res-valor-liquido">R$ ${formatarMoeda(liquido)}</span>
                </div>
            </div>
        `;
    });
}

function voltar() {
    document.getElementById('resultView').style.display = 'none';
    document.getElementById('formView').style.display = 'flex';
}