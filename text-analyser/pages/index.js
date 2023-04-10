import Head from "next/head";
import NavBar from "./component/Navbar";
import TextForm from "./component/TextForm";
export default function HomePage() {
    return (
        <div>
            <Head>
                <title>TexrUtillls</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
            </Head>

            

            <NavBar title= "TextUtills"  about= "About Us"/>
            <div className="container">


            <TextForm></TextForm>
            
            </div>


        </div>
    );
}

