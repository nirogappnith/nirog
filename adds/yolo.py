#this is the main file for the yolo object detection model for training and testing the model for main application


# from ultralytics import YOLO
# import cv2
# import cvzone
# import math

# # webcam

# # cap = cv2.VideoCapture(0)
# # cap.set(3, 800)
# # cap.set(4, 200)

# # video
# cap = cv2.VideoCapture("videos/accident.mp4")

# classes = [
#     "person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck", "boat",
#     "traffic light", "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat",
#     "dog", "horse", "sheep", "cow", "elephant", "bear", "zebra", "giraffe", "backpack",
#     "umbrella", "handbag", "tie", "suitcase", "frisbee", "skis", "snowboard", "sports ball",
#     "kite", "baseball bat", "baseball glove", "skateboard", "surfboard", "tennis racket", "bottle",
#     "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple", "sandwich",
#     "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch",
#     "potted plant", "bed", "dining table", "toilet", "tv", "laptop", "mouse", "remote",
#     "keyboard", "cell phone", "microwave", "oven", "toaster", "sink", "refrigerator", "book",
#     "clock", "vase", "scissors", "teddy bear", "hair drier", "toothbrush"
# ]


# model = YOLO('Yolo-Weights/yolov8l.pt')
# # results = model("download.jpeg", show = True)
# # cv2.waitKey(0)

# while True:
    
#     success, img = cap.read()
#     img = cv2.flip(img, 1)
#     results = model(img, stream = True)
#     for r in results: 
#         boxes = r.boxes
#         for box in boxes:
            
#             x1, y1, x2, y2 = box.xyxy[0]
#             x1, y1, x2, y2 = int(x1), int(y1), int(x2), int(y2)
#             # print(x1, y1, x2, y2)
#             # cv2.rectangle(img, (x1,y1), (x2,y2), (255,0,255), 3)
            
#             w, h = x2-x1, y2-y1
#             cvzone.cornerRect(img, (x1,y1,w,h))
            
#             # confidence 
#             conf = math.ceil((box.conf[0]*100)) / 100
            
#             # class name 
#             cls = int(box.cls[0])
            
#             class_name = classes[cls]
#             confidence = str(conf)

#             cvzone.putTextRect(img, f"{class_name}:{confidence}", (max(0, x1), max(35, y1)), scale = 0.9, thickness = 1)
    
#     cv2.imshow("Image", img)
#     cv2.waitKey(1)
    
    
    
    







