import json
import urllib.request
import urllib.error

API_BASE = 'https://jsonplaceholder.typicode.com'


def fetch_data(endpoint):
    url = f'{API_BASE}/{endpoint}'
    try:
        with urllib.request.urlopen(url, timeout=10) as response:
            payload = response.read().decode('utf-8')
            return json.loads(payload)
    except urllib.error.HTTPError as http_err:
        print(f'Erro HTTP: {http_err.code} {http_err.reason}')
    except urllib.error.URLError as url_err:
        print(f'Erro de conexão: {url_err.reason}')
    except Exception as exc:
        print(f'Falha inesperada: {exc}')
    return None


def show_users(users):
    if not users:
        print('Nenhum usuário para mostrar.')
        return
    print('\n=== Usuários ===')
    for user in users[:8]:
        print(f"ID: {user['id']} - {user['name']}")
        print(f"  Email: {user['email']}")
        print(f"  Empresa: {user['company']['name']}")
        print(f"  Cidade: {user['address']['city']}")
        print('-' * 40)


def show_posts(posts):
    if not posts:
        print('Nenhum post para mostrar.')
        return
    print('\n=== Posts ===')
    for post in posts[:8]:
        print(f"ID: {post['id']} - {post['title']}")
        print(post['body'])
        print('-' * 40)


def main():
    menu = '''
Mini painel de dados em Python
1) Carregar usuários
2) Carregar posts
3) Pokus de memória (demonstração)
4) Limpar tela
0) Sair
Escolha: '''

    while True:
        choice = input(menu).strip()
        if choice == '1':
            users = fetch_data('users')
            show_users(users)
        elif choice == '2':
            posts = fetch_data('posts')
            show_posts(posts)
        elif choice == '3':
            print('\nSimulando coleta de dados locais...')
            sample = [
                {'nome': 'Ana', 'valor': 12},
                {'nome': 'Bruno', 'valor': 27},
                {'nome': 'Carla', 'valor': 19},
            ]
            for item in sample:
                print(f"{item['nome']}: {item['valor']}")
            print('-' * 40)
        elif choice == '4':
            print('\033c', end='')
        elif choice == '0':
            print('Encerrando. Até mais!')
            break
        else:
            print('Opção inválida. Tente novamente.')
            
