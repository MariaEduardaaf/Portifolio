<!-- src/components/ContactSection.vue -->
<template>
    <section id="contact" class="py-16 px-6 bg-background dark:bg-gray-900 transition-colors duration-300 font-poppins">
        <div class="max-w-3xl mx-auto">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center animate-fade-in">
                {{ t('contact.title') }}
            </h1>

            <form @submit.prevent="submitForm"
                class="contact-card group bg-white dark:bg-gray-800 p-10 rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div class="grid grid-cols-2 gap-4 animate-slide-up">
                    <div>
                        <label class="block font-medium mb-2 text-gray-800 dark:text-gray-200">
                            {{ t('contact.firstName') }}
                        </label>
                        <input type="text" :placeholder="t('contact.firstName')" v-model="form.firstName" required
                            class="w-full border-2 border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition duration-300 ease-in-out hover:border-gray-400 dark:hover:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                    </div>

                    <div>
                        <label class="block font-medium mb-2 text-gray-800 dark:text-gray-200">
                            {{ t('contact.lastName') }}
                        </label>
                        <input type="text" :placeholder="t('contact.lastName')" v-model="form.lastName" required
                            class="w-full border-2 border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition duration-300 ease-in-out hover:border-gray-400 dark:hover:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                    </div>
                </div>

                <div class="mt-4 animate-slide-up">
                    <label class="block font-medium mb-2 text-gray-800 dark:text-gray-200">
                        {{ t('contact.email') }}
                    </label>
                    <input type="email" :placeholder="t('contact.email')" v-model="form.email" required
                        class="w-full border-2 border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition duration-300 ease-in-out hover:border-gray-400 dark:hover:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>

                <div class="mt-4 animate-slide-up">
                    <label class="block font-medium mb-2 text-gray-800 dark:text-gray-200">
                        {{ t('contact.message') }}
                    </label>
                    <textarea :placeholder="t('contact.message')" v-model="form.message" required
                        class="w-full h-32 resize-none border-2 border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition duration-300 ease-in-out hover:border-gray-400 dark:hover:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"></textarea>
                </div>

                <div class="mt-4 animate-slide-up">
                    <label class="block font-medium mb-2 text-gray-800 dark:text-gray-200">
                        {{ t('contact.service') }}
                    </label>
                    <div class="grid grid-cols-3 gap-2">
                        <label class="cursor-pointer">
                            <input type="checkbox" value="Frontend" v-model="form.services" @change="updateServices"
                                class="hidden peer" />
                            <span
                                class="block w-full text-center py-2 border-2 border-gray-300 dark:border-gray-500 rounded-full peer-checked:bg-purple-600 peer-checked:text-white transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                                Frontend
                            </span>
                        </label>
                        <label class="cursor-pointer">
                            <input type="checkbox" value="Backend" v-model="form.services" @change="updateServices"
                                class="hidden peer" />
                            <span
                                class="block w-full text-center py-2 border-2 border-gray-300 dark:border-gray-500 rounded-full peer-checked:bg-purple-600 peer-checked:text-white transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                                Backend
                            </span>
                        </label>
                        <label class="cursor-pointer">
                            <input type="checkbox" value="Fullstack" v-model="form.services" @change="updateServices"
                                class="hidden peer" />
                            <span
                                class="block w-full text-center py-2 border-2 border-gray-300 dark:border-gray-500 rounded-full peer-checked:bg-purple-600 peer-checked:text-white transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                                Fullstack
                            </span>
                        </label>
                    </div>
                </div>

                <button type="submit"
                    class="mt-8 w-full py-3 rounded-lg font-semibold transition-all transform hover:-translate-y-1 shadow-md animate-slide-up bg-purple-600 text-white hover:bg-purple-700">
                    {{ t('contact.send') }} <span class="ml-2">→</span>
                </button>
            </form>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    services: [],
})

function updateServices() {
    if (form.services.includes('Frontend') && form.services.includes('Backend')) {
        form.services = ['Fullstack']
    } else if (
        form.services.includes('Fullstack') &&
        (form.services.includes('Frontend') || form.services.includes('Backend'))
    ) {
        form.services = form.services.filter((s) => s !== 'Fullstack')
    }
}

function submitForm() {
    alert(
        `${t('contact.title')}!\n` +
        `${t('contact.firstName')}: ${form.firstName} ${form.lastName}\n` +
        `${t('contact.email')}: ${form.email}\n` +
        `${t('contact.service')}: ${form.services.join(', ')}\n` +
        `${t('contact.message')}: ${form.message}`
    )
}
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fadeIn 1s ease-out;
}

.animate-slide-up {
    animation: slideUp 0.8s ease-out;
}

/* ——————— Contato: borda roxa animada ——————— */
.contact-card {
    position: relative;
    border: 2px solid #1f2937;
    /* padrão light mode */
    border-radius: 1rem;
    overflow: hidden;
    z-index: 0;
    transition: border 0.2s ease;
}

.dark .contact-card {
    /* dark mode sem hover: roxo suave */
    border-color: rgba(147, 51, 234, 0.35);
}

.contact-card.group:hover {
    /* remove a borda estática para dar lugar ao ::before */
    border: none;
}

/* pseudo-elemento que desenha a borda animada */
.contact-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1rem;
    padding: 4px;
    /* espessura da borda */
    background: linear-gradient(90deg,
            #6b21a8,
            #9333ea,
            #8b5cf6,
            #9333ea,
            #6b21a8);
    background-size: 300% 100%;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    mask:
        linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}

.contact-card.group:hover::before {
    opacity: 1;
    animation: border-glow 2s linear infinite;
}

@keyframes border-glow {
    0% {
        background-position: 0% 0%;
    }

    100% {
        background-position: 200% 0%;
    }
}
</style>