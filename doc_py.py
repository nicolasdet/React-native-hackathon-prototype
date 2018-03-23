from gcm import GCM
#djm_HtyIxrM:APA91bHRza5mgE14gtRP06b_uv7JDgZ0bEcUBlIvgvgsH7pbsnWa3z5_aQLXRH7ehipw2-dCiFGC69zU9jWuiwzx4fVXFG-hWpdvEJCITJ5Eoe0Nf5eqFiSbLoJzNdT73tWG_OWD0yPZ

gcm = GCM("AIzaSyA_LJj2iDD5sjTuJrPrkVrE6m-J-vasf9A", debug=True)

token = "e322hEfMBdQ:APA91bEU6yveKVf9qYdEtZufs-86oTS9nasVdguu72lIH3dnjCtBeGO5zMfWWNDKBWfClhihLPwwhttZGX0b1ss7U4f42rJf8ax9BbZLlwSncR7Uk9hEX_HleR0LZkBAYFUBT141aBM1"
token ="cmiH2Un57O0:APA91bES88EA3jnMpzcNlIMPt-LKz_8-EZC7KrlacTEZlO_tlk5wcmfdlI6RJDwvPgD0rFw1nc-4YU1bBzznTaQJBrngBRGSYcaLeAblwZCp2luGn_s3iN7f9CV95DWN3iEazzKmDbdf"
data = {'message': 'Le diner est a 20h. au choix: \n -poulet u fromage \n  - comcombre de mer'}

# Downstream message using JSON request
reg_ids = ['token1', 'token2', 'token3']
response = gcm.json_request(registration_ids=[token], data=data)

# Downstream message using JSON request with extra arguments
res = gcm.json_request(
    registration_ids=reg_ids, data=data,
    collapse_key='uptoyou', delay_while_idle=True, time_to_live=3600
)

# Topic Messaging
topic = 'topic name'
gcm.send_topic_message(topic=topic, data=data)