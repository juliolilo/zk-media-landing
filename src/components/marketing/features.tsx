
import Container from "../global/container";


const Features = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                    Blockchain-Powered   <br /> Image <span className="font-subheading italic">Verification</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                    Verify and trace image authenticity using Celestia and SZ Proofs. Detect modifications and track the complete lifecycle of visual content.                    </p>
                </div>
            </Container>

            
        </div>
    )
};

export default Features
