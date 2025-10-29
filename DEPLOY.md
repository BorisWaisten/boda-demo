# 🚀 Guía de Deploy - Invitación de Boda

## Deploy en Vercel (Recomendado)

### Opción 1: Deploy Automático desde GitHub
1. Sube el código a un repositorio de GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu cuenta de GitHub
4. Importa el proyecto
5. Vercel detectará automáticamente que es un proyecto Next.js
6. Haz clic en "Deploy"

### Opción 2: Deploy desde Terminal
```bash
# Instala Vercel CLI globalmente
npm i -g vercel

# En el directorio del proyecto
vercel

# Sigue las instrucciones en pantalla
# Para producción:
vercel --prod
```

## Configuración del Dominio
1. En el dashboard de Vercel, ve a Settings > Domains
2. Agrega tu dominio personalizado (ej: `bodakatiyfede.com`)
3. Configura los registros DNS según las instrucciones

## Variables de Entorno (si las necesitas)
En Vercel Dashboard > Settings > Environment Variables:
- `NEXT_PUBLIC_SITE_URL`: https://tu-dominio.com
- `NEXT_PUBLIC_ANALYTICS_ID`: tu ID de Google Analytics (opcional)

## Optimizaciones Incluidas
- ✅ Imágenes optimizadas con Next.js Image
- ✅ Fuentes personalizadas cargadas localmente
- ✅ Metadatos SEO completos
- ✅ Open Graph para redes sociales
- ✅ Configuración de seguridad
- ✅ Compresión gzip automática

## Monitoreo
- Vercel Analytics incluido automáticamente
- Logs de rendimiento en tiempo real
- Deploy previews para cada push

## Costo
- **Gratis** para proyectos personales
- **$20/mes** para proyectos comerciales (si necesitas más recursos)

¡Tu invitación estará online en minutos! 🎉
