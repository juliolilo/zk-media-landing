import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Autenticidad Verificada, Sin Esfuerzo",
    description:
      "Sube tu imagen y nuestra plataforma comparará cada versión con la original utilizando pruebas de conocimiento cero (ZK Proofs). Asegura la procedencia y evita falsificaciones con trazabilidad en blockchain.",
  },
  {
    icon: "LineChart",
    title: "Evita Manipulaciones y Fraudes",
    description:
      "Las imágenes editadas pueden distorsionar la realidad. Con nuestra solución, puedes comprobar la integridad de cualquier archivo visual y validar su historial de modificaciones con precisión.",
  },
  {
    icon: "Wallet",
    title: "Trazabilidad Total en Blockchain",
    description:
      "Cada imagen registrada obtiene un hash inmutable que garantiza su autenticidad. Verifica cualquier cambio y accede al historial completo sin depender de terceros. La seguridad está en tus manos.",
  },
  {
    icon: "Sparkle",
    title: "Tecnología Avanzada, Uso Intuitivo",
    description:
      "Nuestra plataforma combina Celestia, SZ Proofs y blockchain para ofrecer una solución de verificación robusta y accesible. Sube, verifica y comparte imágenes con plena confianza en su legitimidad.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Beneficios</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestra solución
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
          Protege la autenticidad de tus imágenes y detecta modificaciones con tecnología avanzada de trazabilidad y pruebas criptográficas. Seguridad, transparencia y verificación sin intermediarios.          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
