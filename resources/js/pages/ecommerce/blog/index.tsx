import LayoutPrincipal from '@/layouts/layout';
import { Head, usePage } from '@inertiajs/react';
import { PostFeature } from './components/PostFeature';
import { Posts } from './components/Posts';
import { Post } from '@/types';

export default function Index() {
    // Especifica el tipo de los datos
    const posts = usePage<{ data: { data: Post[] } }>().props.data.data;
    return (
        <LayoutPrincipal>
            <Head title="Blog |" />
            <PostFeature />
            <Posts data={posts} />
        </LayoutPrincipal>
    );
}
