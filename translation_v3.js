const fbRegexStr = 'https?://(www.|m.|l.|web.|business.)?(d{4,5}.od.)?(business.)?(facebook|instagram|whatsapp).com(/.*)?';

const isValidFbeRedirectUri = (uri) => new RegExp(fbRegexStr).test(uri)

const kyteWebAuthUrl = 'https://stage.web.kyteapp.com/external-login';

function setButtonLink() {
  const params = new URLSearchParams(window.location.search);
  const redirectUri = params.get('redirect_uri');
  if (isValidFbeRedirectUri(redirectUri)) {
    var link = document.getElementById("goto-auth");
    if (!link) return false;
    const href = kyteWebAuthUrl + "?redirect_uri=" + encodeURIComponent(redirectUri);
    link.setAttribute("href", href);
    return false;
  }
}

function getBrowserLang() {
  if (navigator.languages) return navigator.languages[0] || 'pt-BR'
  if (navigator.language) return navigator.language || 'pt-BR'
  return 'pt-BR'
}
function convertBrowserLang(iso) {
  if (iso.startsWith('pt')) return 'pt'
  if (iso.startsWith('es')) return 'es'
  return 'en'
}
const translations = {
  en: {
  },
  pt: {
    "headline": "Configure pedidos de comida no Instagram e no Facebook",
    "headlineDescription": "O Kyte fez uma parceria com a Meta para <b>conectar seu restaurante</b> com milhares de clientes famintos usando o <b>botão Pedir comida</b> em seu perfil comercial e com <b>figurinhas especiais de pedido</b> em seus stories.",
    "showButton": "Já tenho uma conta Kyte",
    "successTitle": "🎉 Incrível!",
    "catalogPublishedTitle": "Seu catálogo Kyte está publicado?",
    "goto-auth": "Sim! Logar e ativar",
    "noCatalogTitle": "Ainda não?",
    "noCatalogDescription": "Sem problemas! Vamos resolver isso rápido. Publicar seu catálogo leva apenas alguns minutos.",
    "qrcodeDescription": "Se estiver no computador, aponte a câmera do celular para o QR Code para abrir o Kyte e publicar seu catálogo.",
    "qrcodeOr": "Ou, se estiver no celular,...",
    "buttonCatalog": "Abrir o Kyte",
    "buttonCreateAccount": "Criar uma conta",
    "headlineAuxText": "Você precisa de uma conta Kyte e um catálogo online para ativar o recurso.",
    "titleReference1": "Criando sua conta",
    "descriptionReference1": "Primeira vez no Kyte? Nós podemos ajudar.",
    "titleReference2": "Publicando o seu catálogo",
    "descriptionReference2": "Monte o menu do seu restaurante em minutos.",
    "titleReference3": "Ativando o recurso",
    "descriptionReference3": "Tudo para você configurar os pedidos de comida.",
    "titleReference4": "Pedidos no Facebook",
    "descriptionReference4": "Veja como este recurso pode ajudar seu restaurante.",
    "titleReference5": "Pedidos no Instagram",
    "descriptionReference5": "Aprenda a transformar fotos e stories em novos pedidos.",
    "titleReference6": "Precisa de ajuda?",
    "descriptionReference6": "Fale com nosso time de sucesso do cliente.",
    "h2-1": "Criando sua conta",
    "description-intro-1": "Configurar sua conta no Kyte é fácil e te dá acesso a todas as integrações com outras plataformas.",
    "steps-1-1": "Baixe e instale o <b>app Kyte</b> em seu celular ou tablet.",
    "steps-2-1": "Selecione a opção de login mais rápida e segura para você – escolha entre seu e-mail, Facebook, Apple ou Google.",
    "steps-3-1": "Informe o nome do seu restaurante.",
    "steps-4-1": "Leia e aceite os Termos de Uso e Política de Privacidade.",
    "steps-5-1": "Confirme sua conta informando o código de 6 dígitos enviado ao e-mail registrado.",
    "steps-6-1": "Se nossa mensagem não estiver em sua caixa de entrada, pode estar no lixo eletrônico ou marcada como spam.",
    "description-closer-1": "Siga as instruções do assistente virtual no app para configurar sua loja e aproveitar tudo o que o Kyte tem a oferecer a você e sua empresa.",
    "link-1": "Como montar minha loja online",
    "h2-2": "Publicando seu catálogo",
    "description-intro-2": "Seu catálogo online pode ser configurado diretamente no aplicativo em poucos passos. Defina o link do seu site, como será a visualização dos produtos e a finalização dos pedidos.",
    "steps-1-2": "Abra o app Kyte, acesse o menu no canto superior esquerdo e vá em <b>Catálogo Online</b>.",
    "steps-2-2": "Insira o nome do seu restaurante e como deseja exibir o link do seu site.",
    "steps-3-2": "Adicione um registro de identidade válido (CPF ou CNPJ), um nome e concorde com os Termos Gerais de Uso.",
    "steps-4-2": "Liste seus perfis nas redes sociais e adicione seu logotipo à página principal.",
    "steps-5-2": "Escolha a cor que mais combina com a sua marca, o modo de exibição dos itens no catálogo (em lista ou Instaview) e dos produtos sem estoque.",
    "steps-6-2": "Ative a opção <b>Aceitar pedidos online</b> para as pessoas poderem fazer pedidos ou compras direto de seu catálogo online.",
    "steps-7-2": "Defina taxas de entrega, um endereço para retirada (se for o seu caso) e os meios de pagamento aceitos.",
    "steps-8-2": "Para adicionar suas mercadorias, acesse o menu e vá em <b>Produtos</b>. Clique no “<b>+</b>” para inserir fotos e informações, como nome, preço e descrição, e depois em <b>Adicionar produto</b>. Repita este passo com todos os itens que quiser anunciar.",
    "steps-9-2": "Publique o seu catálogo online.",
    "description-closer-2": "Aumente sua presença online integrando o seu catálogo a todas as plataformas:",
    "link-2": "Como configurar seu catálogo online",
    "h2-3": "Ativando o recurso",
    "description-intro-3": "A nova integração do Kyte chega para facilitar ao máximo o processo de venda. Com ela, você agiliza essa etapa e foca na produção dos pedidos.",
    "steps-1-3": "Acesse o menu do app Kyte, vá em Catálogo Online e depois em Redes sociais & Outros. Clique em <b>Integrar com parceiros</b> e, em seguida, em <b>Pedidos de comida</b>.",
    "steps-2-3": "Na tela seguinte, acesse sua conta do Facebook e vincule a página comercial de seu restaurante.",
    "steps-3-3": "Após a confirmação do vínculo de sua página comercial com o Kyte, acesse o <b>Gerenciador de Negócios do Facebook</b> e faça o login usando os mesmos dados que você utiliza para entrar no seu perfil.",
    "steps-4-3": "Na tela inicial, na aba de Páginas, clique na página comercial de seu restaurante para ser redirecionado à plataforma <b>Facebook Business Suite</b>.",
    "steps-5-3": "No menu à esquerda, clique em Aplicativos de negócios, selecione o Kyte e, em seguida, em Conectar. Caso veja a opção de Gerenciar em vez de Conectar, a integração foi completada corretamente.",
    "description-closer-3": "As ferramentas de negócios não estão disponíveis no aplicativo do Facebook, portanto é necessário fazer esses passos em um computador ou na versão para PC do navegador de seu celular.",
    "link-business": "Como criar sua página comercial no Facebook",
    "link-3": "Como integrar seu catálogo do Kyte ao Facebook",
    "h2-4": "Pedidos de comida no Facebook",
    "description-intro-4": "Depois de ativar o recurso, você pode configurar o botão Pedir Comida para aparecer em seu perfil do Facebook.",
    "steps-1-4": "Acesse sua conta do Facebook pelo app ou pelo computador.",
    "steps-2-4": "Clique em seu perfil comercial e acesse a ágina de seu restaurante.",
    "steps-3-4": "O <b>botão Pedir Comida</b> é criado automaticamente durante a integração com o Kyte. Caso tenha criado um outro botão antes, ele será apagado.",
    "description-closer-4": "Agora, as pessoas poderão fazer pedidos clicando direto no botão Pedir Comida no seu perfil do Facebook.",
    "link-4": "Como configurar pedidos de comida no Facebook",
    "h2-5": "Pedidos de comida no Instagram",
    "description-intro-5": "Configure o botão Pedir Comida também em seu perfil do Instagram.",
    "steps-1-5": "Vá para o seu perfil do Instagram.",
    "steps-2-5": "Toque em Editar ou Editar perfil.",
    "steps-3-5": "Em Informações comerciais públicas, toque em Opções de contato. Depois, vá em Adicionar um botão de ação.",
    "steps-4-5": "Em Selecione um botão, escolha <b>Pedir Comida</b>.",
    "steps-5-5": "Selecione o <b>Kyte</b> e adicione o link de seu catálogo online.",
    "description-closer-5": "Agora, as pessoas também poderão fazer pedidos clicando direto no botão Pedir Comida no seu perfil do Instagram. Note que, se você tiver qualquer outro botão no seu perfil, ele será automaticamente excluído.",
    "link-5": "Como configurar pedidos de comida no Instagram",
    "h2-6": "Precisa de ajuda? Entre em contato",
    "form-email": "Seu e-mail:",
    "email": "nome@email.com.br",
    "form-question": "Descreva como podemos ajudar:",
    "field": "Exemplo",
    "formSubmit": "Enviar"
  },
  es: {
    "headline": "Configure pedidos de comida en Instagram y Facebook",
    "headlineDescription": "Kyte se ha asociado con Meta para <b>conectar su restaurante</b> con clientes hambrientos mediante el <b>botón Pedir comida</b> en su perfil comercial y con pegatinas especiales de pedidos de comida en sus stories.",
    "showButton": "Ya tengo una cuenta de Kyte",
    "successTitle": "🎉 ¡Increíble!",
    "catalogPublishedTitle": "¿Está publicado su catálogo?",
    "goto-auth": "¡Sí! Iniciar sesión y activar",
    "noCatalogTitle": "¿Aún no?",
    "noCatalogDescription": "¡Sin problemas! Resolvamos esto rápido. La publicación de su catálogo solo lleva unos minutos.",
    "qrcodeDescription": "Si está en su computadora, apunte la cámara de su teléfono al código QR para abrir Kyte y publicar su catálogo.",
    "qrcodeOr": "O, si está en su celular,...",
    "buttonCatalog": "Abrir Kyte",
    "buttonCreateAccount": "Crear una cuenta",
    "headlineAuxText": "Necesita una cuenta de Kyte y un catálogo en línea para activar esta función.",
    "titleReference1": "Creando su cuenta",
    "descriptionReference1": "¿Primera vez en Kyte? Podemos ayudar.",
    "titleReference2": "Publicando su catálogo",
    "descriptionReference2": "Cree el menú de su restaurante en minutos.",
    "titleReference3": "Activando la función",
    "descriptionReference3": "Todo para configurar sus pedidos de comida.",
    "titleReference4": "Pedidos de comida en Facebook",
    "descriptionReference4": "Vea como esta función puede ayudar a su restaurante.",
    "titleReference5": "Pedidos de comida en Instagram",
    "descriptionReference5": "Aprenda a convertir fotos e stories en nuevos pedidos.",
    "titleReference6": "¿Necesita ayuda?",
    "descriptionReference6": "Habla con nuestro equipo de éxito del cliente.",
    "h2-1": "Creando su cuenta",
    "description-intro-1": "Configurar su cuenta de Kyte es fácil y le da acceso a todas las integraciones con otras plataformas.",
    "steps-1-1": "Descargue e instale la <b>aplicación Kyte</b> en su móvil o tableta.",
    "steps-2-1": "Seleccione la opción de inicio de sesión más rápida y segura para usted – elija entre su correo electrónico, Facebook, Apple o Google.",
    "steps-3-1": "Ingrese el nombre de su restaurante.",
    "steps-4-1": "Lea y acepte los Términos de Uso y la Política de Privacidad.",
    "steps-5-1": "Confirme su cuenta ingresando el código de 6 dígitos enviado al correo electrónico registrado.",
    "steps-6-1": "Si nuestro mensaje no está en su bandeja de entrada, puede estar en correo basura o marcado como spam.",
    "description-closer-1": "Siga las instrucciones del asistente virtual en la aplicación para configurar su tienda y disfrutar de todo lo que Kyte tiene para ofrecerle a usted y a su negocio.",
    "link-1": "Cómo configurar mi tienda online",
    "h2-2": "Publicando su catálogo",
    "description-intro-2": "Su catálogo en línea se puede configurar directamente en la aplicación en solo unos pocos pasos. Defina el enlace de su sitio web, cómo se mostrarán los productos y los pedidos realizados.",
    "steps-1-2": "Abra la aplicación Kyte, acceda al menú en la esquina superior izquierda y vaya al <b>Catálogo en línea</b>.",
    "steps-2-2": "Ingrese el nombre de su restaurante y como desea mostrar el enlace de su sitio web.",
    "steps-3-2": "Agregue un registro de identidad válido, un nombre y acepte las Condiciones Generales de Uso.",
    "steps-4-2": "Enumere sus perfiles de redes sociales y agregue su logotipo a la página principal.",
    "steps-5-2": "Elija el color que mejor se adapte a su marca, el modo de visualización de los artículos del catálogo (en la lista o Instaview) y los productos agotados.",
    "steps-6-2": "Active la opción <b>Tomar pedidos en línea</b> para que las personas puedan realizar pedidos o compras directamente desde su catálogo en línea.",
    "steps-7-2": "Establezca las tarifas de envío, una dirección de recogida (si corresponde) y los métodos de pago aceptados.",
    "steps-8-2": "Para agregar sus productos, acceda al menú y vaya a <b>Productos</b>. Haga clic en <b>+</b> para ingresar fotos e información como nombre, precio y descripción, luego <b>Agregar producto</b>. Repite este paso con todos los artículos que quieras anunciar.",
    "steps-9-2": "Publique su catálogo online.",
    "description-closer-2": "Incremente su presencia online integrando su catálogo a todas las plataformas:",
    "link-2": "Cómo configurar su catálogo en línea",
    "h2-3": "Activando la función",
    "description-intro-3": "La nueva integración de Kyte hace que el proceso de ventas sea lo más sencillo posible. Con él, agiliza este paso y se concentra en la producción de pedidos.",
    "steps-1-3": "Acceda al menú de la aplicación Kyte, vaya al Catálogo en línea y luego a Redes sociales y otros. Haga clic en <b>Integrar con socios</b> y luego en <b>Pedidos de comida</b>.",
    "steps-2-3": "En la siguiente pantalla, acceda a su cuenta de Facebook y enlace a la página comercial de su restaurante.",
    "steps-3-3": "Después de confirmar el enlace de su página comercial con Kyte, vaya al <b>Administrador Comercial de Facebook</b> e inicie sesión con los mismos datos que usa para ingresar a su perfil.",
    "steps-4-3": "En la pantalla de inicio, en la pestaña Páginas, haga clic en la página comercial de su restaurante para ser redirigido a la plataforma <b>Facebook Business Suite</b>.",
    "steps-5-3": "En el menú de la izquierda, haga clic en Aplicaciones comerciales, seleccione Kyte y luego Conectar. Si ve la opción Administrar en lugar de Conectar, la integración se completó correctamente.",
    "description-closer-3": "Las herramientas comerciales no están disponibles en la aplicación de Facebook, por lo que debe realizar estos pasos en una computadora o en la versión para PC de su navegador móvil.",
    "link-business": "Cómo crear un perfil comercial en Facebook",
    "link-3": "Cómo integrar el catálogo online en su tienda de Facebook",
    "h2-4": "Pedidos de comida en Facebook",
    "description-intro-4": "Después de activar la función, puede configurar el botón Pedir comida para que aparezca en su perfil de Facebook.",
    "steps-1-4": "Acceda a su cuenta de Facebook desde la aplicación o desde su computadora.",
    "steps-2-4": "Haga clic en su perfil comercial y acceda a la página de su restaurante.",
    "steps-3-4": "El <b>botón Pedir comida</b> se crea automáticamente durante la integración con Kyte. Si creó otro botón anteriormente, se eliminará.",
    "description-closer-4": "Las personas ahora podrán realizar pedidos haciendo clic directamente en el botón Pedir comida en su perfil de Facebook.",
    "link-4": "Cómo configurar los servicios de pedidos de comida en Facebook",
    "h2-5": "Pedidos de comida en Instagram",
    "description-intro-5": "Configure también el botón Pedir comida en su perfil de Instagram.",
    "steps-1-5": "Vaya a su perfil de Instagram.",
    "steps-2-5": "Toque Editar o Editar perfil.",
    "steps-3-5": "En Información de la empresa pública, toque Opciones de contacto y Botones de acción.",
    "steps-4-5": "En Seleccionar un botón, elija <b>Pedir comida</b>.",
    "steps-5-5": "Seleccione <b>Kyte</b> y agregue el enlace a su catálogo en línea.",
    "description-closer-5": "Ahora las personas también podrán realizar pedidos haciendo clic directamente en el botón Solicitar comida en su perfil de Instagram.",
    "link-5": "Cómo configurar pedidos de comida en Instagram",
    "h2-6": "¿Necesita ayuda? Entre en contacto",
    "form-email": "Su correo electrónico:",
    "email": "nombre@email.com",
    "form-question": "Describa cómo podemos ayudar:",
    "field": "Ejemplo",
    "formSubmit": "Enviar"
  }
}

const links = {
  en: {},
  pt: {
    "link-1": "https://www.kyte.com.br/tutoriais/sua-loja-on-line-em-5-simples-passos",
    "link-whats": "https://www.kyte.com.br/tutoriais/como-usar-o-whatsapp-no-seu-catalogo-online",
    "link_insta": "https://www.kyte.com.br/tutoriais/habilitar-a-funcao-compras-no-instagram",
    "link_face": "https://www.kyte.com.br/tutoriais/integrar-kyte-facebook",
    "link-google": "https://www.kyte.com.br/tutoriais/vendendo-no-google-shopping",
    "link-2": "https://www.kyte.com.br/tutoriais/configuracao-de-pedidos-e-catalogo-online",
    "link-business": "https://www.kyte.com.br/blog/como-criar-perfil-comercial-facebook",
    "link-3": "https://www.kyte.com.br/tutoriais/integrar-kyte-facebook",
    "link-4": "https://www.kyte.com.br/tutoriais/como-configurar-pedidos-de-comida-no-facebook",
    "link-5": "https://www.kyte.com.br/tutoriais/como-configurar-pedidos-de-comida-no-instagram"
  },
  es: {
    "link-1": "https://www.appkyte.com/tutoriales/tu-tienda-online-en-5-simples-pasos",
    "link-whats": "https://www.appkyte.com/tutoriales/como-utilizar-whatsapp-en-tu-catalogo-online",
    "link_insta": "https://www.appkyte.com/tutoriales/habilitar-funcion-de-compras-en-instagram",
    "link_face": "https://www.appkyte.com/tutoriales/integrar-el-catalogo-online-en-su-tienda-de-facebook",
    "link-google": "https://www.appkyte.com/tutoriales/vender-en-google-shopping",
    "link-2": "https://www.appkyte.com/tutoriales/configurando-pedidos-y-catalogo-online",
    "link-business": "https://www.appkyte.com/tutoriales/crear-una-tienda-en-facebook",
    "link-3": "https://www.appkyte.com/tutoriales/integrar-el-catalogo-online-en-su-tienda-de-facebook",
    "link-4": "https://www.appkyte.com/tutoriales/como-configurar-los-servicios-de-pedidos-de-comida-en-facebook",
    "link-5": "https://www.appkyte.com/tutoriales/como-configurar-los-servicios-de-pedidos-de-comida-en-instagram"
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const isoLang = getBrowserLang()
  const useLang = convertBrowserLang(isoLang.toLocaleLowerCase())
  const translationKeys = translations[useLang]
  for (const key in translationKeys) {
    document.getElementById(key).innerHTML = translationKeys[key]
  }
  const linkKeys = links[useLang]
  for (const key in linkKeys) {
    document.getElementById(key).href = linkKeys[key]
  }
});

document.addEventListener('DOMContentLoaded', setButtonLink);
