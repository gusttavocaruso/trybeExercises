import platform

print(
    f"Plataforma: {platform.system()}\n"
    f"Versão: {platform.release()}"
    f"Arquitetura: {platform.architecture()[0]}\n"
)
