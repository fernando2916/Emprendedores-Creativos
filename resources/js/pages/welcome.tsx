import LayoutPrincipal from '@/layouts/layout';
import { Head } from '@inertiajs/react';

export default function Welcome() {

    return (
        <>
            <Head />
            <LayoutPrincipal>
                <div className="">
                    <h2>Hola </h2>                    
                </div>
                
            </LayoutPrincipal>            
        </>
    );
}
