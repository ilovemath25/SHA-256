import hashlib

text = 'abc'

m = hashlib.sha256(text.encode('UTF-8'))
print(m.hexdigest())
print("bbe45caf8f01cfea414140de5dae2223b16fa79396177a9cb410ff61f20015ad")