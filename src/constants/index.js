import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    Instagram,
    mongodb,
    nodejs,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    }
];
export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Yamada-Ryuhei',
    },
    {
        name: 'Instagram',
        iconUrl: Instagram,
        link: 'https://www.Instagram.com/sptnnhdnta',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Inventaris Sekolah',
        description: 'Inventaris barang sekolah berbasis web adalah sistem manajemen yang memungkinkan sekolah atau lembaga pendidikan untuk melacak, mengelola, dan memantau inventaris barang mereka melalui platform online.',
        link: 'soon',
    }
];
