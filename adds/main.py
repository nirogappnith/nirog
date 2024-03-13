import cv2
from ultralytics import YOLO
import cvzone
import time

no_person_start_time = None  

video_capture = cv2.VideoCapture(0)

model = YOLO('Yolo-Weights/yolov8l.pt')

classes = [
    "person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck", "boat",
    "traffic light", "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat",
    "dog", "horse", "sheep", "cow", "elephant", "bear", "zebra", "giraffe", "backpack",
    "umbrella", "handbag", "tie", "suitcase", "frisbee", "skis", "snowboard", "sports ball",
    "kite", "baseball bat", "baseball glove", "skateboard", "surfboard", "tennis racket", "bottle",
    "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple", "sandwich",
    "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch",
    "potted plant", "bed", "dining table", "toilet", "tv", "laptop", "mouse", "remote",
    "keyboard", "cell phone", "microwave", "oven", "toaster", "sink", "refrigerator", "book",
    "clock", "vase", "scissors", "teddy bear", "hair drier", "toothbrush"
]
while True:
    ret, frame = video_capture.read()
    frame = cv2.flip(frame, 1)

    results = model(frame, stream=True)

    for result in results:
        boxes = result.boxes
        for box in boxes:
            x1, y1, x2, y2 = box.xyxy[0]
            x1, y1, x2, y2 = int(x1), int(y1), int(x2), int(y2)

            width, height = x2 - x1, y2 - y1

            cls = int(box.cls[0])
            class_name = classes[cls]

            if class_name == "person":
                no_person_start_time = None  

            else:  
                if no_person_start_time is None:
                    no_person_start_time = time.time()  

    current_time = time.time()
    if no_person_start_time is not None:
        no_person_duration = current_time - no_person_start_time
        if(no_person_duration>0):
            print("No person duration:", no_person_duration, "seconds")  

    cv2.imshow('Webcam', frame)
    cv2.waitKey(1)

video_capture.release()
cv2.destroyAllWindows()
