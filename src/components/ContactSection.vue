<!-- src/components/ContactSection.vue -->
<template>
    <section id="contact" class="py-16 px-6 bg-background dark:bg-gray-900 transition-colors duration-300 font-poppins">
        <div class="max-w-3xl mx-auto">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center animate-fade-in">
                {{ t('contact.title') }}
            </h1>

            <form @submit="handleSubmit"
                class="contact-card group bg-white dark:bg-gray-800 p-10 rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div class="grid grid-cols-2 gap-4 animate-slide-up">
                    <div>
                        <label class="block font-medium mb-2 text-gray-800 dark:text-gray-200">
                            {{ t('contact.firstName') }}
                        </label>
                        <input type="text" name="firstName" id="firstName" :placeholder="t('contact.firstName')" required
                            class="w-full border-2 border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition duration-300 ease-in-out hover:border-gray-400 dark:hover:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                    </div>

                    <div>
                        <label class="block font-medium mb-2 text-gray-800 dark:text-gray-200">
                            {{ t('contact.lastName') }}
                        </label>
                        <input type="text" name="lastName" id="lastName" :placeholder="t('contact.lastName')" required
                            class="w-full border-2 border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition duration-300 ease-in-out hover:border-gray-400 dark:hover:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                    </div>
                </div>

                <div class="mt-4 animate-slide-up">
                    <label class="block font-medium mb-2 text-gray-800 dark:text-gray-200">
                        {{ t('contact.email') }}
                    </label>
                    <input type="email" name="email" id="email" :placeholder="t('contact.email')" required
                        class="w-full border-2 border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition duration-300 ease-in-out hover:border-gray-400 dark:hover:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>

                <div class="mt-4 animate-slide-up">
                    <label class="block font-medium mb-2 text-gray-800 dark:text-gray-200">
                        {{ t('contact.message') }}
                    </label>
                    <textarea name="message" id="message" :placeholder="t('contact.message')" required
                        class="w-full h-32 resize-none border-2 border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition duration-300 ease-in-out hover:border-gray-400 dark:hover:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"></textarea>
                </div>

                <div class="mt-4 animate-slide-up">
                    <label class="block font-medium mb-2 text-gray-800 dark:text-gray-200">
                        {{ t('contact.service') }}
                    </label>
                    <div class="grid grid-cols-3 gap-2">
                        <label class="cursor-pointer">
                            <input type="radio" name="service" value="Frontend" checked
                                class="hidden peer" />
                            <span
                                class="block w-full text-center py-2 border-2 border-gray-300 dark:border-gray-500 rounded-full peer-checked:bg-purple-600 peer-checked:text-white transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                                Frontend
                            </span>
                        </label>
                        <label class="cursor-pointer">
                            <input type="radio" name="service" value="Backend"
                                class="hidden peer" />
                            <span
                                class="block w-full text-center py-2 border-2 border-gray-300 dark:border-gray-500 rounded-full peer-checked:bg-purple-600 peer-checked:text-white transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                                Backend
                            </span>
                        </label>
                        <label class="cursor-pointer">
                            <input type="radio" name="service" value="Fullstack"
                                class="hidden peer" />
                            <span
                                class="block w-full text-center py-2 border-2 border-gray-300 dark:border-gray-500 rounded-full peer-checked:bg-purple-600 peer-checked:text-white transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                                Fullstack
                            </span>
                        </label>
                    </div>
                </div>

                <!-- Mensagem de erro -->
                <div v-if="submitStatus === 'error'"
                     class="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-400 rounded-lg animate-slide-up">
                    {{ errorMessage }}
                </div>

                <!-- Mensagem de sucesso -->
                <div v-if="submitStatus === 'success'"
                     class="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-400 rounded-lg animate-slide-up">
                    {{ t('contact.success') }}
                </div>

                <button type="submit"
                    :disabled="isSubmitting"
                    :class="[
                        'mt-8 w-full py-3 rounded-lg font-semibold transition-all transform shadow-md animate-slide-up',
                        isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-purple-600 text-white hover:bg-purple-700 hover:-translate-y-1'
                    ]">
                    <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                        <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {{ t('contact.sending') }}
                    </span>
                    <span v-else>
                        {{ t('contact.send') }} <span class="ml-2">→</span>
                    </span>
                </button>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isSubmitting = ref(false)
const submitStatus = ref(null) // 'success' | 'error' | null
const errorMessage = ref('')

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

function sanitizeInput(str) {
    return str.replace(/<[^>]*>/g, '').trim()
}

async function handleSubmit(event) {
    event.preventDefault()

    const firstName = sanitizeInput(document.getElementById('firstName').value)
    const lastName = sanitizeInput(document.getElementById('lastName').value)
    const email = sanitizeInput(document.getElementById('email').value)
    const originalMessage = sanitizeInput(document.getElementById('message').value)
    const service = document.querySelector('input[name="service"]:checked').value

    // Validacao
    if (firstName.length < 2) {
        errorMessage.value = t('contact.errors.nameTooShort')
        submitStatus.value = 'error'
        return
    }

    if (!validateEmail(email)) {
        errorMessage.value = t('contact.errors.invalidEmail')
        submitStatus.value = 'error'
        return
    }

    if (originalMessage.length < 10) {
        errorMessage.value = t('contact.errors.messageTooShort')
        submitStatus.value = 'error'
        return
    }

    isSubmitting.value = true
    submitStatus.value = null

    const formattedMessage = `New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Service Interest: ${service} Development
Message: ${originalMessage}

---
Sent from Portfolio Contact Form`

    const formData = new FormData()
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('message', originalMessage)
    formData.append('service', service)
    formData.append('formatted_message', formattedMessage)

    try {
        const response = await fetch('https://formspree.io/f/xvgryqog', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })

        if (response.ok) {
            submitStatus.value = 'success'
            // Limpar formulario
            document.getElementById('firstName').value = ''
            document.getElementById('lastName').value = ''
            document.getElementById('email').value = ''
            document.getElementById('message').value = ''
        } else {
            submitStatus.value = 'error'
            errorMessage.value = t('contact.errors.submitFailed')
        }
    } catch (error) {
        submitStatus.value = 'error'
        errorMessage.value = t('contact.errors.networkError')
    } finally {
        isSubmitting.value = false
    }
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
