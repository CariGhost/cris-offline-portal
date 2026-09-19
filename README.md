# C.R.I.S — Campus Resource & Information System

> **Ecosistema integral de servicios digitales offline para instituciones educativas sin acceso a internet.**

---

## 📌 Visión General del Proyecto

**C.R.I.S** es una suite de aplicaciones y servicios diseñada para resolver la brecha digital en centros educativos que operan en entornos rurales o desconectados de internet global. El ecosistema funciona de manera 100% autónoma mediante un servidor de bajo consumo (**Raspberry Pi 4**) conectado a un punto de acceso Wi-Fi (AP), ofreciendo una intranet escolar completa.

El ecosistema integra:
1. 🌐 **Portal Central / Landing Cautivo (`portal/`):** Página de bienvenida y punto de acceso central a todos los recursos escolares y libros digitales.
2. 💬 **E-Chat (`echat-offline/`):** Mensajería instantánea, salones de clase y compartición de archivos.
3. 📚 **L.I.V.E. (`live-offline-library/`):** Biblioteca digital, catálogo literario y motor de gestión de préstamos.

---

## 🏛️ Topología de Red y Servidor

```text
                         [ Antena / Router AP Wi-Fi ]
                                      |
                     [ Red Local Intranet: 192.168.100.0/24 ]
                                      |
        +-----------------------------+-----------------------------+
        |                                                           |
 [ Dispositivos Estudiantes / Docentes ]                  [ Servidor C.R.I.S ]
 (Laptops, Celulares, Tablets)                           (Raspberry Pi 4 - 4GB)
                                                         ├── Nginx Proxy (:80)
                                                         ├── E-Chat API (:8000)
                                                         ├── LIVE API (:8080)
                                                         ├── MySQL Database
                                                         └── SSD Externo (/mnt/ssd)
```

---

## 📂 Contenido del Repositorio

- `portal/`: Portal web estático (HTML5, CSS3, JavaScript) con enlaces directos a E-Chat, LIVE y visor de libros PDF locales.
- `nginx/`: Configuración unificada de Nginx (`nginx-cris-unified.conf`) que enruta el portal, los frontends de Flutter Web y las APIs de FastAPI.
- `docs/`: Bitácoras de seguimiento y documento técnico del proyecto productivo (SENA).

---

## 👤 Autor

**Carlos Díaz** — Homelab & Full-Stack Developer  
*Entornos Educativos y Comunidades con Conectividad Limitada.*
