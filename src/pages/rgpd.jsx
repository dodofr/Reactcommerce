import Header from '../components/Header';

function Rgpd() {
  return (
    <>
      <Header />
      <div className="traiDoree h-1"></div>
      <div className="container p-8">
        <h1 className="text-2xl font-bold mb-4">
          Politique de confidentialité
        </h1>
        <p>
          Cébeauté respecte votre vie privée et s'engage à
          protéger les données personnelles que vous nous fournissez. Cette
          politique de confidentialité décrit les types de données personnelles
          que nous collectons, comment nous les utilisons, et les mesures que
          nous prenons pour protéger votre vie privée.
        </p>
        <p className="text-red-500">
          Si vous ne souhaitez pas étre suivi, vous pouvez cliquer ici : 
          [PLACER ICI L'Iframe pour ne pas étre suivi par matomo]
        </p>
        <br/>
        <h2 className="text-xl font-bold mb-4">
          Informations que nous collectons
        </h2>
        <p>
          Nous collectons les informations suivantes lorsque vous utilisez notre
          site ou nos services :
        </p>
        <ul>
          <li>
            Informations de base, telles que votre nom et votre adresse e-mail
          </li>
          <li>Informations sur vos intérêts et vos activités sur notre site</li>
          <li>Tout autre renseignement que vous choisissez de nous fournir</li>
        </ul>
        <br/>
        <h2 className="text-xl font-bold mb-4">
          Comment nous utilisons vos informations
        </h2>
        <p>Nous utilisons les informations que nous collectons pour :</p>
        <ul>
          <li>Personnaliser votre expérience sur notre site</li>
          <li>
            Envoyer des e-mails marketing et des mises à jour sur nos produits
            et services
          </li>
          <li>Améliorer notre site et nos services</li>
        </ul>
        <br/>
        <h2 className="text-xl font-bold mb-4">
          Protection de vos données personnelles
        </h2>
        <p>
          Nous prenons des mesures de sécurité pour protéger vos
          informations contre la perte, l'utilisation abusive, l'accès non
          autorisé, la divulgation, la modification ou la destruction.
          Cependant, aucune méthode de transmission sur Internet ou de stockage
          électronique n'est complètement sûre. Par conséquent, bien que nous
          nous efforcions de protéger vos données personnelles, nous ne pouvons
          garantir leur sécurité absolue.
        </p>
        <br/>
        <h2 className="text-xl font-bold mb-4">Partage de vos informations</h2>
        <p>
          Nous ne vendrons, n'échangerons ou ne transférerons aucune de vos
          informations à des tiers, à moins de vous en informer et de vous
          obtenir votre consentement. Cela peut inclure des partenaires de
          livraison, de paiement et d'analyse, mais seulement dans la mesure où
          ces parties acceptent de garder ces informations confidentielles.
        </p>
        <p>
          Nous pouvons également divulguer vos informations si nous estimons que
          cela est nécessaire pour se conformer à une loi, une ordonnance
          judiciaire ou une procédure judiciaire.
        </p>
        <br/>
        <h2 className="text-xl font-bold mb-4">Consentement</h2>
        <p>
          En utilisant notre site, vous consentez à notre politique de
          confidentialité.
        </p>
        <br/>
        <h2 className="text-xl font-bold mb-4">
          Modifications à notre politique de confidentialité
        </h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de
          confidentialité à tout moment. Veuillez vérifier régulièrement cette
          page pour vous assurer de connaître les modifications les plus
          récentes.
        </p>
        <br/>
        <h2 className="text-xl font-bold mb-4">Contactez-nous</h2>
        <p>
          Si vous avez des questions ou des commentaires concernant notre
          politique de confidentialité, veuillez nous contacter à :
          <span className="text-red-500">[adresse e-mail ou numéro de téléphone].</span>
        </p>
      </div>
    </>
  );
}

export default Rgpd;
