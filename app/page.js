import Link from "next/link";
import Image from "next/image";
import cardImage1 from '/public/landingImages/landingImage1.jpg';
import cardImage2 from '/public/landingImages/landingImage2.jpg';
import cardImage3 from '/public/landingImages/landingImage3.jpg';

export default function FrontPage() {
    return (
            <main className={'container mx-auto'}>
                {/*Header*/}
                <Header />

                {/*Hero Section*/}
                <HeroSection />

                    <hr className={'mt-10 md:mt-1 mb-10 w-11/12 mx-auto '}/>

                {/*Info Cards Section*/}
                <CardsSection />

            </main>
    )
        ;
}

function Header(){
    return (
        <header className={'mt-6'}>
            <div className={" text-center  font-bold tracking-tight text-gray-900  italic"}>
                <h1 className={'not-italic mb-4'}>Welcome To</h1>
                <span className={'text-6xl md:text-9xl mr-0.5'}>CLOCK</span>
                <span className={'text-2xl md:text-4xl'}>[ing]</span></div>
        </header>
    )
}

function HeroSection() {
    return (
        <section>
            <div className={" px-6 pt-2 lg:px-8"}>
                <div className={"container mx-auto max-w-2xl pt-2 sm:py-8 lg:py-8"}>
                    <div className={"text-center"}>
                        <h1 className={"text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"}>Take Less Time <br/> To Manage Your Time.</h1>
                        <p className={"mt-3 text-lg leading-8 text-gray-600"}>Easily track and control your time punches from employee to employer. Simplify your clock in / out procedures so you can spend more time <span className={'font-bold text-green-500 italic'}>WORKING</span> on your objectives, and less time <span className={'font-bold text-blue-500 italic'}>WORRYING</span> if your time is accounted for.</p>
                        <div className={"mt-6 flex items-center justify-center gap-x-6"}>
                            <Link href={"/signup"} className={"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}>Create an account</Link>
                            <Link href={'/login'} className={"text-sm font-semibold leading-6 text-gray-900"}>Sign In <span aria-hidden="true">→</span></Link>
                        </div>
                    </div>
                </div>
                <div className={"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"} aria-hidden="true">
                    <div className={"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"} style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
                </div>
            </div>
        </section>
    )
}

function CardsSection() {
    return (
        <section>
            <div className={'container mx-auto px-3 flex flex-col md:flex-row w-11/12 justify-items-center gap-5 md:gap-1'}>
                <FeatureCard title={'Build Your Team'} alt={'computers'} srcImage={cardImage1}>
                    <span>Create an account with a simple signup form. You are ready to work in minutes.</span>
                </FeatureCard>
                <hr/>
                <FeatureCard title={'Manage With Ease'} alt={'computers'} srcImage={cardImage2}>
                    <span>Assign positions to employees and track their worked time and wages.</span>
                </FeatureCard>
                <hr/>
                <FeatureCard title={'All Digital'} alt={'computers'} srcImage={cardImage3}>
                    <span>The user-friendly dashboard allows you to effortlessly clock in or out, with one click.</span>
                </FeatureCard>
            </div>
        </section>
    )
}
function FeatureCard({srcImage, alt, title, children}) {
    return (
        <div className="mx-auto w-full rounded overflow-hidden shadow-lg flex-col justify-center">
            <Image className="w-full" src={srcImage} alt={alt} priority={true}/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center text-nowrap">{title}</div>
                    <p className="text-gray-700 text-base">
                        {children}
                    </p>
                </div>
        </div>
    )
}