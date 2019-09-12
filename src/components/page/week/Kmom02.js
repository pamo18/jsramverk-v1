import React, { Component } from 'react';

class Kmom02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Kmom02 kommer snart"
        };
    }

    render() {
        return (
            <div>
                <p><a href="https://github.com/pamo18/jsramverk-v1">Min GitHub Repot</a></p>
                <p>Under detta kursmoment har jag skapat ett registreringsformulär till min me-sida.  Tidigare under programmet har jag jobbat med formulär en hel del och har lärt mig mycket om processen, men har inte funderat så länge över den UX som en användare kommer uppleva.  Jag har själv upplevt en del frustration med vissa formulär på nätet och nu har jag chansen att göra en egen, bättre version.  Mitt formulär samlar en del information, förmodligen för mycket med man måste testa olika saker först.  Egentligen skulle jag samla enbart nödvändig information, beroende på projektet, för att förbättra säkerheten, GDPR, samt för att förenkla registrationsprocessen.  Jag har gjort mitt formulär strikt, där man måste skriva detaljer enligt vissa regler.  Varje aktivt fält är blå markerat, där en grön ram betyder godkänd data.  Det finns en lösenordsmätare för att se hur stark lösenordet är, baserade på min egen skala.  Varje gång någon registrerar sig så lagras motsvarande land till en favoritlista ’Common countries’, som syns överst i scroll listan, som har plats för max tre länder.  Jag använder localStorage för detta.</p>

                <p>Jag har också skapat min egen Datepicker, en kalender för att registrera sin födelsedag.  Jag har skapat allt själv med ren JavaScript, en HTML tabell och CSS.  Jag valde att använda en scrollbar för val av månader och år eftersom jag känner att man kan välja snabbare.  Däremot kanske jag ska ändra på detta framöver för att testa andra varianter.  React har massor med olika Datepicker moduler som kan installeras och med tanken på att detta är en jsramverk kurs så hade det varit rolig att jobba med dessa moduler istället.</p>

                <p>Jag skannade över de sidor som kursen föreslog för att hitta inspiration, det finns många olika idé och strategier för alla sorts projekt.  Men min största inspiration var mina egna förväntningar och erfarenheter.</p>
            </div>
        );
    }
}

export default Kmom02;
