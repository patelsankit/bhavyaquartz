import Certificate from "@/components/Cer/Cer";
import WorkProcess from "@/components/WorkProcess/workProcess";
import Counter from "@/components/counter/counter";


export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* About Section */}
            <section className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:pr-8">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">Bhavya is One Of The Best Quartz Stone Company</h2>
                    <p className="mb-4 justify-center">
                        We are one of the most leading companies in the manufacture and exporter of quality quartz stone in India.                   
                    </p>
                    <p className='justify-center'>
                         Our company provides an exclusive range of quartz stones counter top which has many qualities such as it is durable, strong non-porous, attractive colors, smooth, etc.
                    </p>
                    <p className='justify-center'>
                        These all stones are rigorously quality tested by our highly qualified team of quality testers that help us to ensure that the end product is completely faultless and has a longer shelf life.
                    </p>
                </div>
            </section>

            {/* Work Process Section */}
            <section className="bg-gray-100 py-16 text-center">
                 <WorkProcess />
            </section>

            {/* Stats Section */}
            <section className="py-16 flex flex-col md:flex-row justify-around text-center">
                <div className="mb-8 md:mb-0">
                    <Counter endValue={5} duration={2000} />
                    <p className="text-lg mt-2">Years of Experience</p>
                </div>
                <div className="mb-8 md:mb-0">
                    <Counter endValue={15} duration={2000} />
                    <p className="text-lg mt-2">Team members</p>
                </div>
                <div className="mb-8 md:mb-0">
                    <Counter endValue={10} duration={2000} />
                    <p className="text-lg mt-2">Successful Projects</p>
                </div>
                <div>
                    <Counter endValue={20} duration={2000} />
                    <p className="text-lg mt-2">Happy Clients</p>
                </div>
            </section>

            {/* Certificates Section */}
            <section className="py-16">
                <h2 className="text-3xl font-bold text-center mb-8">Certificates</h2>
                <Certificate/>
            </section>
        </div>
    );
}
